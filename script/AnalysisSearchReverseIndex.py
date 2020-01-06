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

def find_player_count_for_each_keyword(len_analysis):
    for i in range(30):
        print(len_analysis[i]["keyword"], len_analysis[i]["length"])

def analyze_keyword_length_freq(len_analysis):
    results = [0] * 50
    for pair in len_analysis:
        keyword_len = len(pair["keyword"])
        results[keyword_len] += 1
    for i in range(50):
        print("total keyword of len", i, "is", results[i])

def count_players_for_keyword_of_diff_len(len_analysis):
    results = [0] * 50
    for pair in len_analysis:
        keyword_len = len(pair["keyword"])
        results[keyword_len] += pair["length"]
    for i in range(50):
        print("total players for keyword of len", i, "is", results[i])

with open("AnalysisSearchReverseIndexV2.json") as json_file:
    len_analysis = json.load(json_file, parse_float=decimal.Decimal)

    # count how many players are there for each keyword
    # eg: for the keyword "ronald", there are xxx players
    # find_player_count_for_each_keyword(len_analysis)

    # count the frequency for keywords of each length
    # eg: there are xxx keywords that are 5-character long
    # analyze_keyword_length_freq(len_analysis)

    # count how many players are there for the keywords of each length
    # eg: for keyword of length 5, there are xxx players
    count_players_for_keyword_of_diff_len(len_analysis)
