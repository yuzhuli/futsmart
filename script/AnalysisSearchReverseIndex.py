import json
import decimal
from operator import itemgetter

# with open("search_indexing.json") as json_file:
#     indexing_results = json.load(json_file, parse_float=decimal.Decimal)
#     len_analysis = []

#     print("start generate array")
#     for keyword in indexing_results:
#         temp = {
#             "keyword": keyword, 
#             "length": len(indexing_results[keyword])
#         }
#         len_analysis.append(temp)
    
#     print("start sorting")
#     len_analysis = sorted(len_analysis, key=itemgetter("length"), reverse=True)

# print("generate output file")
# with open("AnalysisSearchReverseIndexV2.json", "w") as output_file:
#     json.dump(len_analysis, output_file)

with open("AnalysisSearchReverseIndexV2.json") as json_file:
    len_analysis = json.load(json_file, parse_float=decimal.Decimal)
    for i in range(30):
        print(len_analysis[i]["keyword"], len_analysis[i]["length"])
