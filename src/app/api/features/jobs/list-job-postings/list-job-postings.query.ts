export class ListJobPostingsQuery {
  constructor(
    public readonly category?: string,
    public readonly status?: string,
  ) { }
}