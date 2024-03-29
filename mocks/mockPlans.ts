import { PayrollFrequency, PlanType, PlanYear } from '@/types/insurance';

export const mockPlans: PlanYear[] = [
  {
    name: 'TrainingFE',
    type: PlanType.dental,
    contributions: 234,
    startDate: '2022-12-13T09:27:51.020Z',
    endDate: '2022-12-14T21:00:00.000Z',
    payrollFrequency: PayrollFrequency.monthly,
    initialized: false,
    initializedAt: null,
    employerId: '6161a553-20f6-46ba-b7ca-7f6c55645708',
    id: 'bbe1ca2b-95e4-4a6c-90b8-ac9b8fd795e7',
  },
  {
    name: 'General Medical Insurance',
    type: PlanType.medical,
    contributions: 234,
    startDate: '2022-12-13T09:27:51.020Z',
    endDate: '2022-12-13T21:00:00.000Z',
    payrollFrequency: PayrollFrequency.weekly,
    initialized: false,
    initializedAt: null,
    employerId: '6161a553-20f6-46ba-b7ca-7f6c55645708',
    id: '4ab8dd7d-95f9-4671-ba4d-539b50476b96',
  },
  {
    name: 'Plan I',
    type: PlanType.dental,
    contributions: 200,
    startDate: '2022-12-13T09:27:51.020Z',
    endDate: '2022-12-14T21:00:00.000Z',
    payrollFrequency: PayrollFrequency.monthly,
    initialized: false,
    initializedAt: null,
    employerId: '6161a553-20f6-46ba-b7ca-7f6c55645708',
    id: 'bbe1ca2b-95e4-4a6c-90b8-ac9b8fd79999',
  },
];
