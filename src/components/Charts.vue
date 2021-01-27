<script>
import { Pie } from "vue-chartjs";
export default {
  data() {
    return {
      data: {
        labels: ["Ja", "Nein", "Vielleicht"],
        datasets: [
          {
            label: "# of Votes",
            data: [12, 19, 3],
            backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(75, 192, 192, 0.2)",
            ],
            borderColor: [
              "rgba(255, 99, 132, 1)",
              "rgba(54, 162, 235, 1)",
              "rgba(75, 192, 192, 1)",
            ],
            borderWidth: 1,
          },
        ],
      },
      options: {
        responsive: true,
      },
    };
  },
  extends: Pie,
  mounted() {
    this.renderChart(this.data, this.options);
  },
};
</script>

<style lang="scss" scoped></style>
