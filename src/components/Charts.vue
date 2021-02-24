<script>
import { Pie } from "vue-chartjs";
export default {
  data() {
    return {
      dataBorderColor: [
        "rgba(78, 149, 255, 1)",
        "rgba(113, 191, 245, 0.96)",
        "rgba(19, 76, 117, 46)",
        "rgba(31, 126, 194, 76)",
      ],
      dataColor: [
        "rgba(38, 159, 245, 0.96)",
        "rgba(113, 191, 245, 0.96)",
        "rgba(19, 76, 117, 46)",
        "rgba(31, 126, 194, 76)",
      ],
    };
  },
  methods: {
    ChartLabels() {
      let labels = [];
      for (const i of this.result.answer) {
        if (i.option.length > 16) {
          labels.push(i.option.substr(0, 15) + "...");
        } else labels.push(i.option);
      }
      return labels;
    },
    getPeoplePerRes() {
      let data = [];
      for (const i of this.result.answer) {
        data.push(i.count);
      }
      return data;
    },
  },
  props: {
    result: {
      type: Object,
    },
  },
  extends: Pie,
  mounted() {
    this.renderChart(
      {
        labels: this.ChartLabels(),
        datasets: [
          {
            data: this.getPeoplePerRes(),
            backgroundColor: this.dataColor,
            borderColor: this.dataBorderColor,
            borderWidth: 1,
          },
        ],
      },
      {
        responsive: true,
        legend: {
          position: "right",
          labels: {
            padding: 20,
            fontFamily: "Jost",
          },
        },
      }
    );
  },
};
</script>
