export default function CalculatorInput({
  label,
  value,
  setValue,
  step = "1",
  min = 0,
  max,
  suffix,
}) {
  function handleChange(e) {
    const rawValue = e.target.value;

    if (rawValue === "") {
      setValue("");
      return;
    }

    const numberValue = Number(rawValue);

    if (Number.isNaN(numberValue)) {
      return;
    }

    if (numberValue < min) {
      setValue(min);
      return;
    }

    if (max !== undefined && numberValue > max) {
      setValue(max);
      return;
    }

    setValue(numberValue);
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

      <div className="flex">
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
            p-4
            rounded-l-xl
            bg-slate-900
            border
            border-slate-700
            text-white
          "
        />

        {suffix && (
          <div
            className="
              px-4
              flex
              items-center
              rounded-r-xl
              bg-slate-950
              border
              border-l-0
              border-slate-700
              text-slate-500
              whitespace-nowrap
            "
          >
            {suffix}
          </div>
        )}
      </div>
    </div>
  );
}