<template>
  <div>
    <Header
      title="Impressum"
      BtnTitle="Logout"
      :BtnMethod="logout"
    />
      <div class="impressum-text styling">
          <p>
            <strong>Höhere Technische Lehranstalt Wien West</strong>
          </p>
          <p>
            Thaliastraße 125, 1160 Wien
          </p>
          <p>
            Telefon: +43 (01) 49 111-113
          </p>
          <p>
            Fax: +43 (01) 49 111-199
          </p>
          <p>
            E-Mail: direktion@htlwienwest.at
          </p>
          <br>
          <!--TECHNISCHE UMSETZUNG-->
          <p>
            <strong>Technische Umsetzung</strong>
          </p>
          <p>
            Ronald Rupp
          </p>
          <p>
            Tom Kalchmann
          </p>
          <p>
            Pascal Rengelshausen
          </p>
          <p>
            Josef Tungl
          </p>
          <br>
          <!--GRAFIKEN-->
          <p>
            <strong>Grafiken</strong>
          </p>
          <p>
            Ronald Rupp & Tom Kalchmann
          </p>
          <br>
          <!--Haftungsausschluss-->
          <p>
            <strong>Haftungsausschluss</strong>
          </p>
          <p class="text-p"> 
           Die App der Diplomarbeit "CheckIt" hat das Ziel, die Klassengemeinschaft zwischen LehrerInnen und SchülerInnen zu verbessern.
          </p>
          <p class="text-p">
            Sollten Sie Fehler oder Irrtümer entdecken, bitten wir Sie, diese an Ronald Rupp zu melden. Wir werden uns bemühen, diese rasch zu korrigieren.
          </p>
          <p class="text-p">
            Die Autoren übernehmen keinerlei Gewähr für die Aktualität, Korrektheit, Vollständigkeit oder Qualität der bereitgestellten Informationen. Haftungsansprüche gegen die Autoren, welche sich auf Schäden materieller oder ideeller Art beziehen, die durch die Nutzung oder Nichtnutzung der dargebotenen Informationen bzw. durch die Nutzung fehlerhafter und unvollständiger Informationen verursacht wurden, sind grundsätzlich ausgeschlossen, sofern seitens der Autoren kein nachweislich vorsätzliches oder grob fahrlässiges Verschulden vorliegt.
          </p>
          <br>
          <!--Verweise & Links-->
          <p>
            <strong>Verweise & Links</strong>
          </p>
          <p class="text-p">
            Bei direkten oder indirekten Verweisen auf fremde Internetseiten ("Links"), die außerhalb des Verantwortungsbereiches der Autoren liegen, würde eine Haftungsverpflichtung ausschließlich in dem Fall in Kraft treten, in dem der Autor von den Inhalten Kenntnis hat und es ihm technisch möglich und zumutbar wäre, die Nutzung im Falle rechtswidriger Inhalte zu verhindern. Die Autoren erklären daher ausdrücklich, dass zum Zeitpunkt der Linksetzung die entsprechenden verlinkten Seiten frei von illegalen Inhalten waren.
          </p>
          <p class="text-p">
            Die Autoren haben keinerlei Einfluss auf die aktuelle und zukünftige Gestaltung und auf die Inhalte der gelinkten/verknüpften Seiten. Deshalb distanzieren sie sich hiermit ausdrücklich von allen Inhalten aller gelinkten/verknüpften Seiten, die nach der Linksetzung verändert wurden. Diese Feststellung gilt für alle innerhalb des eigenen Internetangebotes gesetzten Links und Verweise sowie für Fremdeinträge in von den Autoren eingerichteten Diskussionsforen. Für illegale, fehlerhafte oder unvollständige Inhalte und insbesondere für Schäden, die aus der Nutzung oder Nichtnutzung solcherart dargebotener Informationen entstehen, haftet allein der Anbieter der Seite, auf welche verwiesen wurde, nicht derjenige, der über Links auf die jeweilige Veröffentlichung lediglich verweist.
          </p>
          <br>
            <!--Urheberrecht-->
          <p>
            <strong>Urheberrecht</strong>
          </p>
          <p class="text-p">
            Die Autoren sind bestrebt, in allen Publikationen die Urheberrechte der verwendeten Grafiken, Tondokumente, Videosequenzen und Texte zu beachten, von ihnen selbst erstellte Grafiken, Tondokumente, Videosequenzen und Texte zu nutzen oder auf lizenzfreie Grafiken, Tondokumente, Videosequenzen und Texte zurückzugreifen.
          </p>
          <p class="text-p">
            Sollte sich auf den jeweiligen Seiten dennoch eine ungekennzeichnete, aber durch fremdes Copyright geschützte Grafik, ein Tondokumente, Videosequenzen oder Text befinden, so konnte das Copyright vom Autor nicht festgestellt werden. Im Falle einer solchen unbeabsichtigten Copyrightverletzung wird das entsprechende Objekt nach Benachrichtigung entfernt bzw. mit dem entsprechenden Copyright kenntlich gemacht. Das Copyright für veröffentlichte, von den Autoren selbst erstellte Objekte bleibt allein beim jeweiligen Autor.
          </p>
          <p class="text-p">
            Eine Vervielfältigung oder Verwendung solcher Grafiken, Tondokumente, Videosequenzen oder Texte in anderen elektronischen oder gedruckten Publikationen ist ohne ausdrückliche Zustimmung des jeweiligen Autors nicht gestattet.
          </p>
    </div>
  </div>
</template>

<script>
import Header from "./../components/Header";

export default {
  components: {
    Header,
  },
  methods: {
    logout() {
      this.$store.dispatch("logout");
      this.$router.replace("/login");
    },
  },
};
</script>

<style scoped>
.styling{
 margin-top: 2%;
 margin-left: 5%;
 margin-right: 5%;
}
.text-p{
  text-align: justify;
  margin: 2rem auto;
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: left;
}
</style>
