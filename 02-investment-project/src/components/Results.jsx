import { calculateInvestmentResults, formatter } from "../util/investment.js";

export default function ({ input }) {
  const resultData = calculateInvestmentResults(input);
  // console.log(resultData);
  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {resultData.map((yearData) => {
          return (
            <tr key={yearData.year}>
              <td>{yearData.year}</td>
              <td>{formatter.format(yearData.valueEndOfYear)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
