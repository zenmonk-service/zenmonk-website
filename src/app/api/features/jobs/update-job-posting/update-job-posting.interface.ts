import { JobCategory } from "@/models/enums/job-category.enum"
import { JobType } from "@/models/enums/job-type.enum"

export interface UpdateJobPostingPayload {
    type: JobType
    category: JobCategory
    role: string
    description: string
    status?: string
}
