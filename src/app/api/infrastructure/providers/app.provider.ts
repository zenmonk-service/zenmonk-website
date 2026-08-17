import { asClass, InjectionMode } from "awilix";
import { AddJobPostingHandler } from "../../features/jobs/add-job-posting/add-job-posting.handler";
import { createTypedContainer } from "./app.type.provider";
import { AddJobPostingController } from "../../features/jobs/add-job-posting/add-job-posting.controller";
import { JobPostingRepository } from "../repositories/job-posting.repository";
import { ListJobPostingsHandler } from "../../features/jobs/list-job-postings/list-job-postings.handler";
import { ListJobPostingsController } from "../../features/jobs/list-job-postings/list-job-postings.controller";
import { JobSkillRepository } from "../repositories/job-skill.repository";
import { UpdateJobPostingController } from "../../features/jobs/update-job-posting/update-job-posting.controller";
import { UpdateJobPostingHandler } from "../../features/jobs/update-job-posting/update-job-posting.handler";
import { CloseJobPostingController } from "../../features/jobs/close-job-posting/close-job-posting.controller";
import { CloseJobPostingHandler } from "../../features/jobs/close-job-posting/close-job-posting.handler";
import { OpenJobPostingController } from "../../features/jobs/open-job-posting/open-job-posting.controller";
import { OpenJobPostingHandler } from "../../features/jobs/open-job-posting/open-job-posting.handler";
import { RemoveJobPostingController } from "../../features/jobs/remove-job-posting/remove-job-posting.controller";
import { RemoveJobPostingHandler } from "../../features/jobs/remove-job-posting/remove-job-posting.handler";
import { AddJobSkillHandler } from "../../features/job-skills/add-job-skill/add-job-skill.handler";
import { AddJobSkillController } from "../../features/job-skills/add-job-skill/add-job-skill.controller";
import { RemoveJobSkillHandler } from "../../features/job-skills/remove-job-skill/remove-job-skill.handler";
import { RemoveJobSkillController } from "../../features/job-skills/remove-job-skill/remove-job-skill.controller";
import { ListJobSkillsHandler } from "../../features/job-skills/list-job-skills/list-job-skills.handler";
import { ListJobSkillsController } from "../../features/job-skills/list-job-skills/list-job-skills.controller";
import { FindJobPostingController } from "../../features/jobs/find-job-posting/find-job-posting.controller";
import { FindJobPostingHandler } from "../../features/jobs/find-job-posting/find-job-posting.handler";
import { SkillRepository } from "../repositories/skill.repository";
import { AddSkillHandler } from "../../features/skills/add-skill/add-skill.handler";
import { AddSkillController } from "../../features/skills/add-skill/add-skill.controller";
import { UpdateSkillController } from "../../features/skills/update-skill/update-skill.controller";
import { UpdateSkillHandler } from "../../features/skills/update-skill/update-skill.handler";
import { RemoveSkillController } from "../../features/skills/remove-skill/remove-skill.controller";
import { RemoveSkillHandler } from "../../features/skills/remove-skill/remove-skill.handler";
import { ListApplicationsController } from "../../features/applications/list-applications/list-applications.controller";
import { ListApplicationHandler } from "../../features/applications/list-applications/list-applications.handler";
import { CreateApplicationController } from "../../features/applications/create-application/create-application.controller";
import { CreateApplicationHandler } from "../../features/applications/create-application/create-application.handler";
import { ApplicationRepository } from "../repositories/application.repository";
import { ListSkillsController } from "../../features/skills/list-skills/list-skills.controller";
import { FindSkillController } from "../../features/skills/find-skill/find-skill.controller";
import { ListSkillsHandler } from "../../features/skills/list-skills/list-skills.handler";
import { FindSkillHandler } from "../../features/skills/find-skill/find-skill.handler";
import { FindJobSkillController } from "../../features/job-skills/find-job-skill/find-job-skill.controller";
import { FindJobSkillHandler } from "../../features/job-skills/find-job-skill/find-job-skill.handler";
import { MailService } from "../services/mail.service";
const containerRegistrations = {
  addJobPostingHandler: asClass(AddJobPostingHandler),
  addJobPostingController: asClass(AddJobPostingController),
  jobPostingRepository: asClass(JobPostingRepository),
  listJobPostingsHandler: asClass(ListJobPostingsHandler),
  listJobPostingsController: asClass(ListJobPostingsController),
  jobSkillRepository: asClass(JobSkillRepository),
  updateJobPostingController: asClass(UpdateJobPostingController),
  updateJobPostingHandler: asClass(UpdateJobPostingHandler),
  closeJobPostingController: asClass(CloseJobPostingController),
  closeJobPostingHandler: asClass(CloseJobPostingHandler),
  openJobPostingHandler: asClass(OpenJobPostingHandler),
  openJobPostingController: asClass(OpenJobPostingController),
  removeJobPostingController: asClass(RemoveJobPostingController),
  removeJobPostingHandler: asClass(RemoveJobPostingHandler),
  findJobPostingController: asClass(FindJobPostingController),
  findJobPostingHandler: asClass(FindJobPostingHandler),
  addJobSkillHandler: asClass(AddJobSkillHandler),
  addJobSkillController: asClass(AddJobSkillController),
  removeJobSkillHandler: asClass(RemoveJobSkillHandler),
  removeJobSkillController: asClass(RemoveJobSkillController),
  listJobSkillsHandler: asClass(ListJobSkillsHandler),
  listJobSkillsController: asClass(ListJobSkillsController),
  findJobSkillController: asClass(FindJobSkillController),
  findJobSkillHandler: asClass(FindJobSkillHandler),
  skillRepository: asClass(SkillRepository),
  addSkillHandler: asClass(AddSkillHandler),
  addSkillController: asClass(AddSkillController),
  listSkillController: asClass(ListSkillsController),
  listSkillHandler: asClass(ListSkillsHandler),
  findSkillController: asClass(FindSkillController),
  findSkillHandler: asClass(FindSkillHandler),
  updateSkillController: asClass(UpdateSkillController),
  updateSkillHandler: asClass(UpdateSkillHandler),
  removeSkillController: asClass(RemoveSkillController),
  removeSkillHandler: asClass(RemoveSkillHandler),
  listApplicationsController: asClass(ListApplicationsController),
  listApplicationsHandler: asClass(ListApplicationHandler),
  createApplicationController: asClass(CreateApplicationController),
  createApplicationHandler: asClass(CreateApplicationHandler),
  applicationRepository: asClass(ApplicationRepository),
  mailService: asClass(MailService)
}

export const container = createTypedContainer(containerRegistrations, {
  injectionMode: InjectionMode.PROXY,
});
