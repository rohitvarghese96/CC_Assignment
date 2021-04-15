using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Reducer
{
    class Program
    {
        static void Main(string[] args)
        {
            //Dictionary for holding count of words
            Dictionary<string, int> words = new Dictionary<string, int>();

            string line;

            //Read from STDIN
            while((line = Console.ReadLine()) != null)
            {
                //Data from Hadoop is tab/de-limited key/value pairs
                var sArr = line.Split('\t');

                //Get the word
                string word = sArr[0];

                //Get the count
                int count = Convert.ToInt32(sArr[1]);

                //If count already exist
                if (words.ContainsKey(word))
                {
                    //Increment the count
                    words[word] += count;
                }
                else
                {
                    //Add key to the collection
                    words.Add(word, count);
                }
            }

            //Finally, emit each word and count
            foreach(var word in words)
            {
                //Emit tab de-limited key/value pairs
                Console.WriteLine("{0}\t{1}", word.Key, word.Value);
            }
        }
    }
}
