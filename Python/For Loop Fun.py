# -*- coding: utf-8 -*-
"""
Created on Tue Apr 24 09:18:17 2018

@author: TCH_User
"""
#myCoolArray = [1,2,3,4,5,6,7,8,9,10,11,12]
#
#for number in myCoolArray:
#    if number % 2 == 1:
#        print(number)
        
import requests
data = []
def getNauts():
    #this is all of the stuff inside the function
    response = requests.get("http://api.open-notify.org/astros.json")
    print(response)
    data = response.json()
    print(data)
    if "people" in data:
        print(data["people"])
        print("----- Current Astronauts in Space -----")
        for astro in data["people"]:
            print(astro["name"] + " on board the " + astro["craft"])  
    else:
            print("Sorry, currently there are no pigs in space")

getNauts()