const CodingChallengePage = ({ title, Challenge }) => {
  const styles = {
    backdrop: {
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
    },
    container: {
      margin: '4rem auto',
      width: '30rem',
      backgroundColor: 'floralwhite',
      padding: '1rem',
      borderRadius: '0.5rem'
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
      marginTop: '1rem',
    },
    label: {
      marginTop: '0.5rem'
    },
    button: {
      marginTop: '1rem'
    }
  };

  return (
    <div style={styles.backdrop}>
      <div style={styles.container}>
        <h2>{title}</h2>
        <Challenge />
        <form style={styles.form}>
          <label htmlFor='answer' style={styles.label}>Ditt svar</label>
          <input id='answer' type='number' placeholder='123'></input>
          <label htmlFor='code' style={styles.label}>Kode</label>
          <textarea
            id='code'
            placeholder='console.log("Hello world!");'
            rows='10'
          ></textarea>
          <label htmlFor='email' style={styles.label}>E-post</label>
          <input id='email' type='email' placeholder='julenissen@nordpolen.no'></input>
          <button type='submit' style={styles.button}>Send inn svaret</button>
        </form>
      </div>
    </div>
  );
};

export default CodingChallengePage;