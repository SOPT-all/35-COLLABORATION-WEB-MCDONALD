export interface NutritionProps {
  nutrition: {
    weight_g: number;
    calories: number;
    sugar: number;
    protein: number;
    saturated_fat: number;
    sodium: number;
    caffeine: number | null;
  };
}

const NutritionTable = ({ nutrition }: NutritionProps) => (
  <table>
    <thead>
      <tr>
        <th>영양소</th>
        <th>함량</th>
        <th>영양소기준치</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>중량(g)</td>
        <td>{nutrition.weight_g}g</td>
        <td>-</td>
      </tr>
      <tr>
        <td>중량(ml)</td>
        <td>-</td>
        <td>-</td>
      </tr>
      <tr>
        <td>열량</td>
        <td>{nutrition.calories}kcal</td>
        <td>-</td>
      </tr>
      <tr>
        <td>당</td>
        <td>{nutrition.sugar}g</td>
        <td>10%</td>
      </tr>
      <tr>
        <td>단백질</td>
        <td>{nutrition.protein}g</td>
        <td>69%</td>
      </tr>
      <tr>
        <td>포화지방</td>
        <td>{nutrition.saturated_fat}g</td>
        <td>30%</td>
      </tr>
      <tr>
        <td>나트륨</td>
        <td>{nutrition.sodium}mg</td>
        <td>89%</td>
      </tr>
      <tr>
        <td>카페인</td>
        <td>{nutrition.caffeine ? `${nutrition.caffeine}mg` : '-'}</td>
        <td>-</td>
      </tr>
    </tbody>
  </table>
);

export default NutritionTable;
