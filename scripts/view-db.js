const mongoose = require('mongoose');

const DB_USER = 'user';
const DB_PASSWORD = 'zenmonk';
const DB_HOST = 'localhost';
const DB_PORT = '27018';
const DB_NAME = 'zenmonk-websitex';

const MONGODB_URI = `mongodb://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}?authSource=admin`;

async function viewDatabase() {
  try {
    console.log(`🔗 Connecting to: ${DB_HOST}:${DB_PORT}/${DB_NAME}\n`);
    await mongoose.connect(MONGODB_URI);
    console.log('✅ Connected to MongoDB\n');

    // List collections
    const collections = await mongoose.connection.db.listCollections().toArray();
    console.log('📦 Collections:');
    collections.forEach(col => console.log(`  - ${col.name}`));

    // Count documents
    console.log('\n📊 Document Counts:');
    for (const col of collections) {
      const count = await mongoose.connection.db.collection(col.name).countDocuments();
      console.log(`  ${col.name}: ${count} documents`);
    }

    // Show ALL applications
    console.log('\n\n📝 ═══ APPLICATIONS ═══');
    const applications = await mongoose.connection.db.collection('applications').find().toArray();
    if (applications.length === 0) {
      console.log('  ⚠️  No applications yet. Submit one through the website!');
    } else {
      applications.forEach((app, i) => {
        console.log(`\n  ━━━ Application ${i + 1} ━━━`);
        console.log(`  📧 Email: ${app.email}`);
        console.log(`  👤 Name: ${app.name}`);
        console.log(`  📱 Phone: ${app.phone || 'N/A'}`);
        console.log(`  🔖 Tracking ID: ${app.tracking_id}`);
        console.log(`  📊 Status: ${app.status}`);
        console.log(`  💼 Job: ${app.job_posting}`);
        console.log(`  📅 Created: ${new Date(app.createdAt).toLocaleString()}`);
      });
    }

    // Show ALL job postings
    console.log('\n\n💼 ═══ JOB POSTINGS ═══');
    const jobs = await mongoose.connection.db.collection('job_postings').find().toArray();
    jobs.forEach((job, i) => {
      console.log(`\n  ━━━ Job ${i + 1} ━━━`);
      console.log(`  🏷️  Role: ${job.role}`);
      console.log(`  📂 Category: ${job.category}`);
      console.log(`  📊 Status: ${job.status}`);
      console.log(`  💼 Type: ${job.type}`);
      console.log(`  📝 Description: ${job.description.substring(0, 80)}...`);
    });

    // Show skills
    console.log('\n\n🛠️  ═══ SKILLS ═══');
    const skills = await mongoose.connection.db.collection('skills').find().toArray();
    console.log(`  Total: ${skills.length} skills`);
    skills.forEach(skill => {
      console.log(`  • ${skill.name}`);
    });

    await mongoose.connection.close();
    console.log('\n\n✅ Connection closed');
  } catch (err) {
    console.error('❌ Error:', err.message);
  }
  process.exit(0);
}

viewDatabase();
