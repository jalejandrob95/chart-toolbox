import { useFetch } from './useFetch';
import { Table } from 'react-bootstrap';

function App() {
  const { data, loading, error } = useFetch(
    'http://localhost:3003/v1/files/data'
  );
  return (
    <div className="App">
      <div className="container" style={{ paddingTop: '20px' }}>
        <header className="App-header">
          <h1 class="alert alert-danger">File API</h1>
          {error && <li>Error...</li>}
          {loading && <li>Loading..</li>}
          <ul></ul>
        </header>

        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>File Name</th>
              <th>Text</th>
              <th>Number</th>
              <th>Hex</th>
            </tr>
          </thead>
          <tr></tr>
          <tbody class="table-group-divider">
            {data?.map((file, fileIndex) =>
              file.list.map((item, index) => (
                <tr key={`${fileIndex}-${index}`}>
                  {index === 0 ? (
                    <td rowSpan={file.list.length}>{file.file}</td>
                  ) : null}
                  <td>{item.text}</td>
                  <td>{item.number}</td>
                  <td>{item.hex}</td>
                </tr>
              ))
            )}
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default App;
