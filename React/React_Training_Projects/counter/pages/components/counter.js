const Counter = () => {
  return (
    <>
      <span
        className={`${
          counterValue < 0
            ? "text-danger"
            : counterValue > 0
            ? "text-success"
            : ""
        }`}
      >
        {counterValue}
      </span>
    </>
  );
};

export default Counter;
