export default ({
  container: {
    border: '1px solid rgb(233,233,233)',
    marginBottom: 100,
  },
  favIcon: {
    width: 40,
    height: 40,
    position: 'absolute',
    top: 4,
    right: 5,
    zIndex: 1,
  },
  title: {
    textAlign: 'center',
    fontFamily: 'Proxima Nova Light',
    position: 'absolute',
    right: '0',
    top: '20px',
    bottom: '-60px',
    left: '0',
    padding: '15px 20px',
    marginLeft: '20px',
    marginRight: '20px',
    boxShadow: '0 1px 10px rgb(233,233,233)',
    backgroundColor: 'white',
  },
  name: {
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    marginBottom: 10,
  },
  brand: {
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
  },
  productImg: {
    maxHeight: '100%',
    width: '100%',
    objectFit: 'contain',
    overflow: 'hidden',
  },
  imgContainer: {
    height: '400px',
    verticalAlign: 'middle',
    overflow: 'hidden',
    display: 'flex',
  },
});