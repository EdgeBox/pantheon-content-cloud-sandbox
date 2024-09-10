import { RestClient } from './content-cloud/rest-client';

export const contentCloud = new RestClient({
	baseUrl: 'https://3040-edgebox-stack-wdnz22aqd5s.ws-eu116.gitpod.io',
	spaceId: 'CBCvnQsP5tyHsv',
	environmentId: 'v11NBqPNcfeCyt',
	token:
		'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzcGFjZUlkIjoiQ0JDdm5Rc1A1dHlIc3YiLCJjbGllbnRJZCI6IkhmcER1aGQ4MFJLbHVxIiwicGVybWlzc2lvbnMiOlsiUkVBRF9QVUJMSVNIRURfQ09OVEVOVCJdLCJ1c2VyRGF0YUNvbnRlbnRUeXBlcyI6WyIqIl0sInVzZXJJZCI6ImFwcC91c2VyL2N1c3RvbS1pZC0xMjMiLCJlbnZpcm9ubWVudElkcyI6WyJ2MTFOQnFQTmNmZUN5dCJdLCJpYXQiOjE3MjU5NTI2NjEwNjQsImV4cCI6MTcyODYzMTA2MTA2NH0.I52-v1PtJReHWiMEgmX9ZSw6fgJ1B7bbzUbKDN_CuUc',
});
