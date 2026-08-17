import { container } from '../../infrastructure/providers/app.provider'

export async function listApplications() {
  return await container.resolve('listApplicationsController').handle()
}

export async function createApplication(request: Request) {
  return await container.resolve('createApplicationController').handle(request)
}