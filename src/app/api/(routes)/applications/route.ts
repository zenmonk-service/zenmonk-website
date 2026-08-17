import { listApplications, createApplication } from '../../features/applications'

export const GET = async () => {
  return await listApplications();
}

export const POST = async (request: Request) => {
  return await createApplication(request);
}
