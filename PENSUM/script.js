document.addEventListener("DOMContentLoaded", () => {
  const checkboxes = document.querySelectorAll("input[type='checkbox']");

  // Cargar progreso
  checkboxes.forEach((cb, i) => {
    cb.checked = localStorage.getItem(`materia_${i}`) === "true";
    cb.addEventListener("change", () => {
      localStorage.setItem(`materia_${i}`, cb.checked);
      actualizarPorcentajes();
    });
  });

  actualizarPorcentajes();

  function actualizarPorcentajes() {
    const semestres = document.querySelectorAll(".semestre");

    semestres.forEach(sem => {
      const checks = sem.querySelectorAll("input[type='checkbox']");
      const total = checks.length;
      const hechos = Array.from(checks).filter(cb => cb.checked).length;
      const porcentaje = total ? Math.round((hechos / total) * 100) : 0;
      sem.querySelector(".porcentaje").textContent = `(${porcentaje}%)`;
    });
  }
});
