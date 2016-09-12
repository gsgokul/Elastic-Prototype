using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Nest;

namespace TestApplication
{

    public class ElasticRepository<T> where T : class, new()
    {
        protected ElasticClient Client = null;
        public ElasticRepository(Uri url)
        {
            Client = new ElasticClient(new ConnectionSettings(url));
        }

        public async Task<bool> Index(T data, string indexName = null, string indexType = null)
        {
            var response = await Client.IndexAsync<T>(data, c => c.Index(indexName).Type(indexType));
            return response.Created;
        }

        public async Task<T> Get(string id, string indexName, string indexType = null)
        {
            var response = await Client.GetAsync<T>(id, idx => idx.Index(indexName).Type(indexType));
            return response.Source;
        }

        /*public List<KeyValuePair<string, string>> Search(string searchKey, string indexName = null, string indexType = null)
        {

            Client.Search(s => s.Index(indexName).Type(indexType).Query(q => q.Ids(searchKey));
            return new List<KeyValuePair<string, string>>();
        }*/

    }
}
