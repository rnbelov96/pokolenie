/* eslint-disable no-param-reassign */
export {};

const leftColor = '#1b5fab';
const rightColor = '#cee5ff';

const rangeElList = document.querySelectorAll('.js-range');

const onceRange = document.querySelector('.js-once-range') as HTMLInputElement;
const abonementRange = document.querySelector(
  '.js-abonement-range',
) as HTMLInputElement;
const checkRange = document.querySelector(
  '.js-check-range',
) as HTMLInputElement;

const resultLabelElList = document.querySelectorAll('.js-calc-result');

let result: number;

let personCurrentStep = 2;
let adultsCurrentStep = 3;
let kidsCurrentStep = 6;

const calcResult = () => {
  result = (Number(onceRange.value) * Number(checkRange.value)
      + Number(abonementRange.value) * Number(checkRange.value))
    * 0.18;
  resultLabelElList.forEach(resultLabelEl => {
    resultLabelEl.textContent = result.toLocaleString();
  });
  return result;
};

calcResult();

rangeElList.forEach(el => {
  const rangeEl = el as HTMLInputElement;

  const steps = (Number(rangeEl.max) - Number(rangeEl.min)) / Number(rangeEl.step);

  const currentStep = (Number(rangeEl.value) - Number(rangeEl.min)) / Number(rangeEl.step);

  rangeEl.style.background = `linear-gradient(to right, ${leftColor} 0%, ${leftColor} ${String(
    (currentStep / steps) * 100,
  )}%, ${rightColor} ${String(
    (currentStep / steps) * 100,
  )}%, ${rightColor} 100%)`;
});

onceRange.addEventListener('input', e => {
  const rangeEl = e.currentTarget as HTMLInputElement;

  const steps = (Number(rangeEl.max) - Number(rangeEl.min)) / Number(rangeEl.step);

  personCurrentStep = (Number(rangeEl.value) - Number(rangeEl.min)) / Number(rangeEl.step);

  rangeEl.style.background = `linear-gradient(to right, ${leftColor} 0%, ${leftColor} ${String(
    (personCurrentStep / steps) * 100,
  )}%, ${rightColor} ${String(
    (personCurrentStep / steps) * 100,
  )}%, ${rightColor} 100%)`;

  calcResult();
});

abonementRange.addEventListener('input', e => {
  const rangeEl = e.currentTarget as HTMLInputElement;

  const steps = (Number(rangeEl.max) - Number(rangeEl.min)) / Number(rangeEl.step);

  adultsCurrentStep = (Number(rangeEl.value) - Number(rangeEl.min)) / Number(rangeEl.step);

  rangeEl.style.background = `linear-gradient(to right, ${leftColor} 0%, ${leftColor} ${String(
    (adultsCurrentStep / steps) * 100,
  )}%, ${rightColor} ${String(
    (adultsCurrentStep / steps) * 100,
  )}%, ${rightColor} 100%)`;

  calcResult();
});

checkRange.addEventListener('input', e => {
  const rangeEl = e.currentTarget as HTMLInputElement;

  const steps = (Number(rangeEl.max) - Number(rangeEl.min)) / Number(rangeEl.step);

  kidsCurrentStep = (Number(rangeEl.value) - Number(rangeEl.min)) / Number(rangeEl.step);

  rangeEl.style.background = `linear-gradient(to right, ${leftColor} 0%, ${leftColor} ${String(
    (kidsCurrentStep / steps) * 100,
  )}%, ${rightColor} ${String(
    (kidsCurrentStep / steps) * 100,
  )}%, ${rightColor} 100%)`;

  calcResult();
});
