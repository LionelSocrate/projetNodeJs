const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

module.exports.uploadErrors = (err) => {
  let errors = { format: "" };
  if (err.message.includes("invalid file"))
    errors.format = "Format incompatible";
  return errors;
};
