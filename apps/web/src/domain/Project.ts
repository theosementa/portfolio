
export interface Project {
  name: string
  logo: string
  images: string[]
  subtitle: string
  presentation: string
  description: string
  date: string
  downloadLink: string | undefined
  languages: string[]
  frameworks: string[]
  libraries: string[]
}

export class ProjectData {
  static cashflow: Project = {
    name: "CashFlow",
    logo: "/assets/images/projects/cashflow/CashFlowLogo.png",
    images: [
      "/assets/images/projects/cashflow/mockups/fr/HomeView.png",
      "/assets/images/projects/cashflow/mockups/fr/CategoriesView.png",
      "/assets/images/projects/cashflow/mockups/fr/AnalyticsView.png"
    ],
    subtitle: "projects.cashflow.subtitle",
    presentation: "projects.cashflow.presentation",
    description: "projects.cashflow.description",
    date: "projects.cashflow.date",
    downloadLink: "https://apps.apple.com/fr/app/cashflow-suivi-des-d%C3%A9penses/id6450913423?platform=iphone",
    languages: ["Swift"],
    frameworks: ["SwiftUI", "Charts", "StoreKit", "AppIntent", "CoreData", "CloudKit", "VisionKit", "UserNotifications"],
    libraries: []
  }

  static cyclo: Project = {
    name: "Cyclo",
    logo: "/assets/images/projects/Cyclo.png",
    images: [],
    subtitle: "projects.cyclo.subtitle",
    presentation: "projects.cyclo.presentation",
    description: "projects.cyclo.description",
    date: "projects.cyclo.date",
    downloadLink: "https://github.com/theosementa/Cyclo",
    languages: ["Swift"],
    frameworks: ["SwiftUI", "HealthKit", "MapKit", "Charts", "CoreData"],
    libraries: []
  }

  static ecoTime: Project = {
    name: "EcoTime",
    logo: "/assets/images/projects/EcoTime.png",
    images: [],
    subtitle: "projects.ecoTime.subtitle",
    presentation: "projects.ecoTime.presentation",
    description: "projects.ecoTime.description",
    date: "projects.ecoTime.date",
    downloadLink: "https://github.com/theosementa/EcoTime",
    languages: ["Swift"],
    frameworks: ["SwiftUI", "DeviceActivity", "FamilyControls", "ManagedSettings"],
    libraries: []
  }

  static split: Project = {
    name: "Split",
    logo: "/assets/images/projects/Split.png",
    images: [],
    subtitle: "projects.split.subtitle",
    presentation: "projects.split.presentation",
    description: "projects.split.description",
    date: "projects.split.date",
    downloadLink: "https://apps.apple.com/fr/app/split-partager-les-d%C3%A9penses/id6504157641",
    languages: ["Swift"],
    frameworks: ["SwiftUI", "HealthKit", "MapKit", "Charts", "CoreData", "CloudKit"],
    libraries: []
  }

  static tyradex: Project = {
    name: "Tyradex",
    logo: "/assets/images/projects/Tyradex.png",
    images: [],
    subtitle: "projects.tyradex.subtitle",
    presentation: "projects.tyradex.presentation",
    description: "projects.tyradex.description",
    date: "projects.tyradex.date",
    downloadLink: "https://github.com/theosementa/Tyradex",
    languages: ["Swift"],
    frameworks: ["SwiftUI", "HealthKit", "MapKit", "Charts", "CoreData", "CloudKit"],
    libraries: []
  }

  static tyradexKit: Project = {
    name: "TyradexKit",
    logo: "/assets/images/projects/Tyradex.png",
    images: [],
    subtitle: "projects.tyradexKit.subtitle",
    presentation: "projects.tyradexKit.presentation",
    description: "projects.tyradexKit.description",
    date: "projects.tyradexKit.date",
    downloadLink: "https://github.com/theosementa/TyradexKit",
    languages: ["Swift"],
    frameworks: ["SwiftUI", "HealthKit", "MapKit", "Charts", "CoreData", "CloudKit"],
    libraries: []
  }

  static portfolio: Project = {
    name: "Portfolio",
    logo: "/assets/images/theosementa.jpg",
    images: [],
    subtitle: "projects.portfolio.subtitle",
    presentation: "projects.portfolio.presentation",
    description: "projects.portfolio.description",
    date: "projects.portfolio.date",
    downloadLink: "https://github.com/theosementa/portfolio",
    languages: ["TypeScript"],
    frameworks: [],
    libraries: ["React"]
  }

  static projects: Project[] = [
    this.cashflow, this.cyclo, this.ecoTime, this.split, this.tyradex, this.tyradexKit, this.portfolio
  ]
}