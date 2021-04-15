using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.RegularExpressions;
using System.Threading.Tasks;

namespace MapReduceProject
{
    class Program
    {
        static void Main(string[] args)
        {
            string line;

            //Hadoop passes data to the mapperon STDIN
            while((line = Console.ReadLine()) != null)
            {
                //Only words. Strip punctuation
                var onlyText = Regex.Replace(line, @"\.|;|:|,|[0-9]|'", "");

                //Split at whitespace
                var words = Regex.Matches(onlyText, @"[\w]+");

                //Loop over the words
                foreach(var word in words)
                {
                    //Emit tab-delimited key/value pairs
                    Console.WriteLine("{0}\t1", word);
                }
            }
        }
    }
}
