import { ECommerce, HealthCare, Retail, RealEstate, Education, Sectors } from './assets'

export const sectorsList = [
  {
    sector: 'Health Care',
    id: 1,
    image: Sectors.HealthCare,
    services: [
      {
        title: 'Tele Medicine App Development',
        image: HealthCare.TeleSvg,
        background: '#EBFEFF',
      },
      {
        title: 'Mental Health App Development',
        image: HealthCare.MentalHealth,
        background: '#EBF6FF',
      },
      {
        title: 'On - Demand Doctor App Development',
        background: '#EEFFF1',
        image: HealthCare.OnDemandSvg,
      },

      {
        title: 'Medical App Development',
        background: '#F8F2FF',
        image: HealthCare.MedicalApp,
      },

      {
        title: 'Pharma App Development',
        background: '#FFFDE8',
        image: HealthCare.PharmaSvg,
      },

      {
        title: 'HIPPA compliance Software',
        image: HealthCare.Hippa,
        background: '#FFF2EE',
      },
    ],
  },
  {
    id: 2,
    sector: 'E-commerce',
    image: Sectors.ECommerce,
    services: [
      {
        title: 'Online Marketplace Platform',
        background: '#EBFEFF',
        image: ECommerce.MarketPlatform,
      },
      {
        title: 'Subscription Shopping Website',
        background: '#EBFEFF',
        image: ECommerce.ShoppingWebsite,
      },
      {
        title: 'Product Recommendation Tool',
        background: '#EEFFF1',
        image: ECommerce.ProductRecommendation,
      },

      {
        title: 'Shopping Mobile App',
        background: '#F8F2FF',
        image: ECommerce.ShoppingMobile,
      },

      {
        title: 'Online Payment Integration System',
        background: '#FFFDE8',
        image: ECommerce.OnlinePayment,
      },

      {
        title: 'Customer Support Chatbot',
        image: ECommerce.ChatBot,
        background: '#FFF2EE',
      },
    ],
  },
  {
    id: 3,
    sector: 'Retail',
    image: Sectors.Retail,
    services: [
      {
        title: 'Store Checkout Software',
        background: '#EBFEFF',
        image: Retail.StoreCheckout,
      },
      {
        title: 'Customer Rewards App',
        background: '#EBF6FF',
        image: Retail.CustomerRewards,
      },
      {
        title: 'Sales Tracking Dashboard',
        background: '#EEFFF1',
        image: Retail.SalesTracking,
      },

      {
        title: 'Stock Management System',
        background: '#F8F2FF',
        image: Retail.StockManagement,
      },

      {
        title: 'Virtual Shopping App',
        background: '#FFFDE8',
        image: Retail.VirtualShopping,
      },

      {
        title: 'Multi-Channel Retail Platform',
        background: '#FFF2EE',
        image: Retail.MultiChannelSvg,
      },
    ],
  },
  {
    id: 4,
    sector: 'Real Estate',
    image: Sectors.RealEstate,
    services: [
      {
        title: 'Property Management Software',
        background: '#EBFEFF',
        image: RealEstate.PropertyManagement,
      },
      {
        title: 'Virtual Property Tour Platform',
        background: '#EBF6FF',
        image: RealEstate.VirtualTour,
      },
      {
        title: 'Real Estate CRM System',
        background: '#EEFFF1',
        image: RealEstate.Crm,
      },

      {
        title: 'Real Estate Listing Platform',
        background: '#F8F2FF',
        image: RealEstate.EstateListing,
      },

      {
        title: 'Rental Marketplace App',
        background: '#FFFDE8',
        image: RealEstate.RentalMarketplace,
      },

      {
        title: 'Real Estate Investment App',
        background: '#FFF2EE',
        image: RealEstate.Investment,
      },
    ],
  },
  {
    id: 5,
    sector: 'Education',
    image: Sectors.Education,
    services: [
      {
        title: 'Online Learning Platform',
        background: '#EBFEFF',
        image: Education.OnlineLearning,
      },
      {
        title: 'Virtual Classroom Software',
        background: '#EBF6FF',
        image: Education.VirtualClassroom,
      },
      {
        title: 'Learning Management System',
        background: '#EEFFF1',
        image: Education.LearningManagement,
      },

      {
        title: 'Online Exam and Assessment Tool',
        background: '#F8F2FF',
        image: Education.OnlineExam,
      },

      {
        title: 'Student Management System',
        background: '#FFFDE8',
        image: Education.StudentManagement,
      },

      {
        title: 'EdTech Mobile App',
        background: '#FFF2EE',
        image: Education.EdTechApp,
      },
    ],
  },
]
