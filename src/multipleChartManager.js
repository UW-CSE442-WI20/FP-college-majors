import SmallChartSingle from "./smallChartSingle.js";
import SmallChartPair from "./smallChartPair.js";

// You can separate your code out into modules to
// keep code clean.

class MultipleChartManager {
  constructor() {
    this.median = new SmallChartSingle("medianPaySmallChart");
    this.unemployment = new SmallChartSingle("medianPaySmallChart");
    this.gender = new SmallChartPair("genderSmallChart");
    this.hour = new SmallChartPair("hourSmallChart");
  }

  update(data) {
    data = ["Petroleum Engineering", "Mass Media", "Journalism", "Communications"];
    this.median.update(FACTORS.Median, data);
    this.unemployment.update(FACTORS.Unemployment_rate, data);
    this.gender.update(FACTORS.Men, data);
    this.hour.update(FACTORS.Full_time, data);
  }
}

module.exports = MultipleChartManager;