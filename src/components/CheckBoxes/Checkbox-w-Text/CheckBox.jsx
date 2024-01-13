import style from "./styleCheckbox.module.css";

export default function CheckBox() {
  return (
    <div className="border-2 border-[#616773] text-[#616773] p-2 rounded-lg px-4 py-2">
      <label htmlFor="check-box" className="label flex justify-center gap-0.5">
        <input
          className={`${style.CBinputEl}`}
          type="checkbox"
          id="check-box"
          name="check-box"
        />
        Imperial
      </label>
    </div>
  );
}
