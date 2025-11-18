import { SolviumHero } from "./_sections/solvium-hero"
import { CoreProblem } from "./_sections/core-problem"
import { UniqueSolution } from "./_sections/unique-solution"
import { KeyMetrics } from "./_sections/key-metrics"
import { RevenueModel } from "./_sections/revenue-model"
import { UnfairAdvantage } from "./_sections/unfair-advantage"
import { Vision } from "./_sections/vision"

export default function HomePage() {
  return (
    <main>
      <SolviumHero />
      <CoreProblem />
      <UniqueSolution />
      <KeyMetrics />
      <RevenueModel />
      <UnfairAdvantage />
      <Vision />
    </main>
  )
}
