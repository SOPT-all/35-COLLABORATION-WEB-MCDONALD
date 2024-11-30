export interface NutritionProps {
  nutritionContent: {
    weightG: number | null;
    weightML: number;
    calories: number;
    sugar: number;
    protein: number;
    saturatedFat: number;
    sodium: number;
    caffeine: number;
  };
  nutrition_reference: {
    weightG: number | null;
    weightML: number;
    calories: number;
    sugar: number;
    protein: number;
    saturatedFat: number;
    sodium: number;
    caffeine: number;
  };
}

const NutritionTable = ({
  nutritionContent,
  nutrition_reference,
}: NutritionProps) => (
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
        <td>{nutritionContent.weightG}g</td>
        <td>
          {nutrition_reference.weightG ? `${nutritionContent.weightG}%` : '-'}
        </td>
      </tr>
      <tr>
        <td>중량(ml)</td>
        <td>{nutritionContent.weightML}g</td>
        <td>
          {nutrition_reference.weightML ? `${nutritionContent.weightML}%` : '-'}
        </td>
      </tr>
      <tr>
        <td>열량</td>
        <td>{nutritionContent.calories}kcal</td>
        <td>
          {nutrition_reference.calories ? `${nutritionContent.calories}%` : '-'}
        </td>
      </tr>
      <tr>
        <td>당</td>
        <td>{nutritionContent.sugar}g</td>
        <td>
          {nutrition_reference.sugar ? `${nutritionContent.sugar}%` : '-'}
        </td>
      </tr>
      <tr>
        <td>단백질</td>
        <td>{nutritionContent.protein}g</td>
        <td>
          {nutrition_reference.protein ? `${nutritionContent.protein}%` : '-'}
        </td>
      </tr>
      <tr>
        <td>포화지방</td>
        <td>{nutritionContent.saturatedFat}g</td>
        <td>
          {nutrition_reference.saturatedFat
            ? `${nutritionContent.saturatedFat}%`
            : '-'}
        </td>
      </tr>
      <tr>
        <td>나트륨</td>
        <td>{nutritionContent.sodium}mg</td>
        <td>
          {nutrition_reference.sodium ? `${nutritionContent.sodium}%` : '-'}
        </td>
      </tr>
      <tr>
        <td>카페인</td>
        <td>
          {nutritionContent.caffeine ? `${nutritionContent.caffeine}mg` : '-'}
        </td>
        <td>
          {nutrition_reference.caffeine ? `${nutritionContent.caffeine}%` : '-'}
        </td>
      </tr>
    </tbody>
  </table>
);

export default NutritionTable;
