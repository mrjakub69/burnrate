export default function CalculatorInput({
  label,
  value,
  setValue,
  step = "1",
  min = 0,
  max,
  suffix,
}) {
  const numericStep = Number(step) || 1;

  function clampValue(numberValue) {
    if (numberValue < min) {
      return min;
    }

    if (max !== undefined && numberValue > max) {
      return max;
    }

    return numberValue;
  }

  function cleanNumber(numberValue) {
    return Number(numberValue.toFixed(10));
  }

  function handleChange(e) {
    const rawValue = e.target.value;

    if (rawValue === "") {
      setValue("");
      return;
    }

    const numberValue = Number(rawValue.replace(",", "."));

    if (Number.isNaN(numberValue)) {
      return;
    }

    setValue(cleanNumber(clampValue(numberValue)));
  }

  function changeValue(direction) {
    const currentValue =
      value === "" || Number.isNaN(Number(value))
        ? 0
        : Number(value);

    const nextValue =
      currentValue + direction * numericStep;

    setValue(cleanNumber(clampValue(nextValue)));
  }

  function blockInvalidKeys(e) {
    if (["-", "+", "e"].includes(e.key)) {
      e.preventDefault();
    }
  }

  return (
    <div>
      <label className="block text-slate-400 mb-2">
        {label}
      </label>

      <div className="flex rounded-2xl border border-slate-700 bg-slate-900 overflow-hidden">
        <button
  type="button"
  onClick={() => changeValue(-1)}
  disabled={Number(value) <= min}
  className="
    w-14
    min-h-[58px]
    flex
    items-center
    justify-center
    bg-slate-800
    hover:bg-slate-700
    disabled:bg-slate-900
    disabled:text-slate-700
    disabled:cursor-not-allowed
    text-2xl
    font-bold
    text-white
    transition
  "
>
  −
</button>

        <input
          type="number"
          step={step}
          min={min}
          max={max}
          value={value}
          onChange={handleChange}
          onKeyDown={blockInvalidKeys}
          className="
            w-full
            min-h-[58px]
            px-4
            bg-slate-900
            text-white
            text-lg
            outline-none
            text-center
            [appearance:textfield]
            [&::-webkit-outer-spin-button]:appearance-none
            [&::-webkit-inner-spin-button]:appearance-none
          "
        />

        {suffix && (
          <div
            className="
              min-h-[58px]
              px-4
              flex
              items-center
              justify-center
              bg-slate-950
              border-l
              border-slate-700
              text-slate-400
              whitespace-nowrap
              text-sm
            "
          >
            {suffix}
          </div>
        )}

        <button
          type="button"
          onClick={() => changeValue(1)}
          className="
            w-14
            min-h-[58px]
            flex
            items-center
            justify-center
            bg-cyan-400
            hover:bg-cyan-300
            text-2xl
            font-bold
            text-slate-950
            transition
          "
        >
          +
        </button>
      </div>
    </div>
  );
}