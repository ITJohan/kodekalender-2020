import imageOfGraph from './graph-challenge.jpg';

const GraphChallenge = () => {
  const styles = {
    image: {
      width: '100%'
    }
  };
  
  return (
    <>
      <p>
        Julenissen planlegger årets gaveutdeling, men han trenger sårt hjelp. I fjor rakk han å levere pakker til alle barna, men det var på hengende håret. I år er det flere barn og enda flere pakker som må deles ut, og han trenger din hjelp for å finne ut hvordan han best bør reise for å rekke å dra innom alle barna.
      </p>
      <br />
      <p>
        Heldigvis har Julenissen en nylig oppdatert graf med alle barna og avstanden mellom husene deres. Den ser slik ut:
      </p>
      <img style={styles.image} src={imageOfGraph} alt='Santas graph' />
      <p>
        Kan du hjelpe julenissen med å finne den korteste ruten innom alle barna? Vi er ute etter den korteste totale avstanden, i heltall.
      </p>
    </>
  )
}

export default GraphChallenge;