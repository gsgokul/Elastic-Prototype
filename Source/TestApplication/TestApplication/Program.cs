using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;
using RandomNameGeneratorLibrary;

namespace TestApplication
{
    internal class Program
    {
        private const string elasticUrl = "http://172.24.243.25:9200";
        private static readonly ElasticRepository<Provider> esProviderRepo = new ElasticRepository<Provider>(new Uri(elasticUrl));
        private static readonly ElasticRepository<Practice> esPracticeRepo = new ElasticRepository<Practice>(new Uri(elasticUrl));

        private static void Main(string[] args)
        {
            int j = 0;
            var practice = new Practice()
            {
                Id = j,
                Location = new PlaceNameGenerator().GenerateRandomPlaceName(),
                Name = new PersonNameGenerator().GenerateRandomLastName() + " practice center",
                Providers = new List<Provider>()
            };

            for (int i = 0; i < 1000; i++)
            {
                var provider = new Provider()
                {
                    Id = i,
                    fullname = new PersonNameGenerator().GenerateRandomFirstAndLastName(),
                    status = i % 2 == 0 ? "contract pending" : "under contract",
                    Npi = GetRandomNpi()
                };
                IndexProvider(provider);

                if (i % 20 == 0)
                {
                    //create a new practice for every 20 providers
                    practice = new Practice()
                    {
                        Id = ++j,
                        Npi = GetRandomNpi(),
                        Name = new PersonNameGenerator().GenerateRandomLastName() + " practice center",
                        Location = new PlaceNameGenerator().GenerateRandomPlaceName(),
                        Providers = new List<Provider>()
                    };
                }
                practice.Providers.Add(provider);
                IndexPractice(practice);

                Console.WriteLine("Added provider:{0}, practice:{1}", i, j);
            }

            Console.WriteLine("Sample provider:" + GetProvider(999).fullname);
            Console.WriteLine("Provider count:" + GetPractice(1).Providers.Count);
            Console.WriteLine("Press any key ...");
            Console.ReadLine();
        }

        private static int GetRandomNpi()
        {
            return new Random().Next(1000000000, 2147483647);
        }

        private static Provider GetProvider(int id)
        {
            var task = esProviderRepo.Get(id.ToString(), "network", "provider");
            return task.Result;
        }

        private static bool IndexProvider(Provider data)
        {
            var task = esProviderRepo.Index(data, "network", "provider");
            return task.Result;
        }

        private static Practice GetPractice(int id)
        {
            var task = esPracticeRepo.Get(id.ToString(), "network", "practice");
            return task.Result;
        }

        private static bool IndexPractice(Practice data)
        {
            var task = esPracticeRepo.Index(data, "network", "practice");
            return task.Result;
        }

        private static async Task<HttpResponseMessage> StoreInElasticAsync()
        {
            string json =
                @"{'id' : 1,'fullname' : 'John Doe','dateofbirth' : '1970/01/12','address1' : '4321 Lync Rd','address2' : '','city' : 'Columbia','state' : 'MD','zip' : 21044,'statusId' : 'under contract'}";
            HttpClient client = new HttpClient();
            var stringContent = new StringContent(json, Encoding.UTF8, "application/json");

            var result = await client.PutAsJsonAsync(elasticUrl, json);
            return result;
        }
    }

    public class Provider
    {
        public int Id { get; set; }

        public long Npi { get; set; }

        public long Tin { get; set; }

        public string fullname { get; set; }
        public string dateofbirth { get; set; }
        public string address1 { get; set; }
        public string address2 { get; set; }

        public string city { get; set; }

        public string state { get; set; }

        public int zip { get; set; }
        public string status { get; set; }
    }

    public class Practice
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public long Npi { get; set; }

        public long Tin { get; set; }

        public string Location { get; set; }

        public List<Provider> Providers { get; set; }
    }
}