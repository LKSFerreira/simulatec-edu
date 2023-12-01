function somar(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    return NaN;
  }

  return a + b;
}

exports.somar = somar;
