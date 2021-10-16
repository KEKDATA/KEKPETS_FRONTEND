import { useGate, useStore } from 'effector-react';
import React from 'react';

import { Result } from 'features/results/result';

import { Loader } from 'shared/ui/loader';

import { resultsModel } from './model';

export const Results = () => {
  const results = useStore(resultsModel.$results);
  const isLoading = useStore(resultsModel.$isResultsLoading);
  const isSearchParamsExist = useStore(resultsModel.$isSearchParamsExist);

  useGate(resultsModel.ResultsGate);

  if (!isSearchParamsExist) {
    return <div> Че за хуйню ты ввел </div>;
  }

  if (isLoading) {
    return <Loader />;
  }

  if (!results) {
    return <div> Ниче не нашли </div>;
  }

  return (
    <div>
      {results.map(result => (
        <Result key={result.id} result={result} />
      ))}
    </div>
  );
};
