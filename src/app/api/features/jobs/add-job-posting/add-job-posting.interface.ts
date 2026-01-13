export interface JobPostingPayload {
  type: string;
  category: string;
  role: string;
  description: string;
  status?: string;
}