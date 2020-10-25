export function end() {
  return `</main>
    <script src="/client/index.js"></script>
    <script>
      window.addEventListener('load', () => bootstrap());
    </script>
  </body></html>`;
}
