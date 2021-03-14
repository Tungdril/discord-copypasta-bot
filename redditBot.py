import praw
import os
import sys

reddit = praw.Reddit(client_id='ypmvYaKdYF5UxQ',
                     client_secret='NogsOcGBCfw_2pJsc9mfaEz3nvA',
                     user_agent='my user agent')

# Don't comment the thing below back in but don't remove
#for submission in reddit.subreddit("copypasta").top(limit=10):
    #if 
    #print(submission.selftext)
    #print(30*"-")
#-------------------------------------------------------------------#

# Comment back in for new set of copypastas

sys.stdout = open('sourceNew.txt', 'w')

for submission in reddit.subreddit("copypasta").top(limit=1000):
    print(submission.selftext.encode("ascii", "ignore"))
    #print(120*"-")

sys.stdout.close()
    