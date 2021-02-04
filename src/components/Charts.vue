<script>
import { Pie } from "vue-chartjs";
export default {
  data() {
    return {
      dataColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(75, 192, 192, 1)",
      ],
    };
  },
  methods: {
    ChartLabels() {
      let labels = [];
      for (const i of this.result.answer) {
        labels.push(i.option);
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
            backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(75, 192, 192, 0.2)",
            ],
            borderColor: this.dataColor,
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
