import type { CalculationFunctions, ComparisonOperators } from './types';

export const helpLink: string =
  'https://openmrs.atlassian.net/wiki/spaces/projects/pages/114426045/Validation+Rule+Builder';
export const dateBasedCalculationFunctions: Array<string> = [
  'Age Based On Date',
  'Expected Delivery Date',
  'Months On ART',
  'Time Difference in days',
  'Time Difference in weeks',
  'Time Difference in years',
];
export const heightAndWeightBasedCalculationFunctions: Array<string> = [
  'BMI',
  'BSA',
  'Height For Age Zscore',
  'BMI For Age Zscore',
  'Weight For Height Zscore',
];
export const emptyStates: Array<string> = ['Is Empty', 'Not Empty'];
export const arrContains: Array<string> = ['Contains any', 'Does not contains any'];

export const comparisonOperators: Array<ComparisonOperators> = [
  { key: 'isEmpty', defaultLabel: 'Is Empty', type: 'string' },
  { key: 'notEmpty', defaultLabel: 'Not Empty', type: 'string' },
  { key: 'greaterThanOrEqualTo', defaultLabel: 'Greater than or equal to', type: 'string' },
  { key: 'lessThanOrEqualTo', defaultLabel: 'Less than or equal to', type: 'string' },
  { key: 'equals', defaultLabel: 'Equals', type: 'string' },
  { key: 'notEquals', defaultLabel: 'Not Equals', type: 'string' },
  { key: 'includes', defaultLabel: 'Includes', type: 'string' },
  { key: 'not includes', defaultLabel: 'Not Includes', type: 'string' },
  { key: 'doesNotMatchExpression', defaultLabel: 'Does not match expression', type: 'string' },
  { key: 'arrayContains', defaultLabel: 'Contains', type: 'string' },
  { key: 'arrayNotContains', defaultLabel: 'Does not contains', type: 'string' },
  { key: 'arrayContainsAny', defaultLabel: 'Contains any', type: 'string' },
  { key: 'arrayNotContainsAny', defaultLabel: 'Does not contains any', type: 'string' },
];

export const calculateFunctions: Array<CalculationFunctions> = [
  { key: 'bmi', defaultLabel: 'BMI', type: 'string' },
  { key: 'bsa', defaultLabel: 'BSA', type: 'string' },
  { key: 'heightForAgeScore', defaultLabel: 'Height For Age Zscore', type: 'string' },
  { key: 'bmiForAgeScore', defaultLabel: 'BMI For Age Zscore', type: 'string' },
  { key: 'ageBasedonArt', defaultLabel: 'Age Based On Date', type: 'string' },
  { key: 'monthsOnArt', defaultLabel: 'Months On ART', type: 'string' },
  { key: 'expectedDeliveryDate', defaultLabel: 'Expected Delivery Date', type: 'string' },
  { key: 'calculateTimeDiffrenceinDays', defaultLabel: 'Time Difference in days', type: 'string' },
  { key: 'calculateTimeDiffrenceinWeeks', defaultLabel: 'Time Difference in weeks', type: 'string' },
  { key: 'calculateTimeDiffrenceinYears', defaultLabel: 'Time Difference in years', type: 'string' },
];
