// constants
import { summaryText } from "@/src/constants/summary.constants";

function Summary() {
  return (
    <section className="rounded-lg custom-shadow md:min-w-[500px]">
      <p>{summaryText.summary1}</p>
      <p>{summaryText.summary2}</p>
      <p>{summaryText.summary3}</p>
      <p className="mt-10">{summaryText.summary4}</p>
    </section>
  );
}

export default Summary;
