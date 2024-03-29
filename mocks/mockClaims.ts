import { PayrollFrequency } from '@/types/insurance';

export const mockClaimProps = {
  amount: 1000,
  consumer: {
    SSN: '123456777',
    city: 'Vilnius',
    email: 'sad@example.com',
    employerID: 'b233015b-f0e3-41ca-accd-a4dd9c5eda38',
    firstName: 'Sad',
    id: 'f8987948-7acb-4839-a3b2-52128e42a2b4',
    lastName: 'Sadid',
    phone: '+370 68611012',
    state: 'Vilnius',
    street: 'Consumer St.',
    username: 'sad',
    zipCode: '55555',
  },
  consumerID: 'f8987948-7acb-4839-a3b2-52128e42a2b4',
  employer: {
    city: 'Minsk',
    code: 'by',
    id: 'b233015b-f0e3-41ca-accd-a4dd9c5eda38',
    name: 'BY - issoft',
    phone: '+370 699 13223',
    state: 'Kaunasss',
    street: 'hisug uorut',
    zipCode: '45454',
    claimFilling: true,
    addConsumers: true,
  },
  id: '93756571-fc74-42be-a71f-026610a628d0',
  number: 'BY20221124E00001',
  plan: {
    contributions: 2000,
    employerId: 'f634658f-5639-4143-b9e4-2537cf30a76e',
    endDate: '2023-01-05T11:34:40.000Z',
    id: 'd701939a-5d1f-4303-b054-395e02298c12',
    inactive: 'false',
    initialized: 'true',
    initializedAt: '2022-12-27T14:03:00.994Z',
    name: 'Test Dental Insurance Two',
    payrollFrequency: PayrollFrequency.monthly,
    startDate: '2022-11-05T11:34:40+0000',
    type: 'dental',
  },
  planID: 'd701939a-5d1f-4303-b054-395e02298c12',
  startDate: '2022-11-09T17:09:58.000Z',
  status: 'pending',
  changeViewToClaims: () => {},
};

import { ClaimsData } from '@/types/adminTypes';

export const mockClaimsData: ClaimsData = {
  data: [
    {
      amount: 200,
      consumer: {
        username: 'testas',
        email: 'jonas@jonas.com',
        firstName: 'Jonas',
        lastName: 'Jonaitis',
        city: 'Kaunas',
        employerID: '2555959595',
        id: '5253077696969',
        phone: '+37069993332211',
        state: 'Kaunas',
        street: 'gatve',
        zipCode: '55555',
        SSN: '555',
      },
      consumerID: '5253077696969',
      employer: {
        name: 'LT-Coherent',
        code: 'LT',
        street: 'debesu',
        city: 'Kauans',
        state: 'Kaunas',
        zipCode: '55555',
        phone: '+3706991333222',
        id: '55565848488',
        claimFilling: true,
        addConsumers: true,
      },
      id: '45451515151515',
      number: 'LT2022120051111',
      plan: {
        name: 'namename',
        type: 'medical',
        contributions: 200,
        id: '54454686845848',
        startDate: '2022-12-13T09:27:51.020Z',
        endDate: '2022-12-14T21:00:00.000Z',
        payrollFrequency: PayrollFrequency.monthly,
        employerId: '6161a553-20f6-46ba-b7ca-7f6c55645708',
      },
      planID: '54454686845848',
      startDate: '2022-12-01',
      status: 'pending',
    },
    {
      amount: 200,
      consumer: {
        username: 'testas',
        email: 'petras@paetras.com',
        firstName: 'petras',
        lastName: 'petraitis',
        city: 'Kaunas',
        employerID: '2555959595',
        id: '5253077696969',
        phone: '+37069993332211',
        state: 'Kaunas',
        street: 'gatve',
        zipCode: '55555',
        SSN: '555',
      },
      consumerID: '5253077696969',
      employer: {
        name: 'LT-Solutions',
        code: 'LT',
        street: 'debesu',
        city: 'Kauans',
        state: 'Kaunas',
        zipCode: '55555',
        phone: '+3706991333222',
        id: '55565848488',
        claimFilling: true,
        addConsumers: true,
      },
      id: '221222565665',
      number: 'LT2022120051222',
      plan: {
        name: 'namename',
        type: 'medical',
        contributions: 200,
        id: '54454686845848',
        startDate: '2022-12-13T09:27:51.020Z',
        endDate: '2022-12-14T21:00:00.000Z',
        payrollFrequency: PayrollFrequency.monthly,
        employerId: '6161a553-20f6-46ba-b7ca-7f6c55645708',
      },
      planID: '54454686845848',
      startDate: '2022-12-01',
      status: 'pending',
    },
  ],
  metadata: [
    {
      numberOfDocuments: 2,
      page: 1,
      pageSize: 5,
    },
  ],
};
