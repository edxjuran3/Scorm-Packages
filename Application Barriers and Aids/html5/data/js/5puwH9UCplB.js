window.globalProvideData('slide', '{"title":"What is the purpose of a Barriers and Aids chart?","trackViews":true,"showMenuResultIcon":false,"viewGroupId":"","historyGroupId":"","videoZoom":"","scrolling":false,"transition":"appear","transDuration":0,"transDir":1,"wipeTrans":false,"slideLock":false,"navIndex":-1,"globalAudioId":"","thumbnailid":"","presenterRef":{"id":"none"},"showAnimationId":"","lmsId":"Slide8","width":720,"height":540,"resume":true,"background":{"type":"fill","fill":{"type":"linear","rotation":90,"colors":[{"kind":"color","rgb":"0xFFFFFF","alpha":100,"stop":0}]}},"id":"5puwH9UCplB","actionGroups":{"ActGrpOnSubmitButtonClick":{"kind":"actiongroup","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"noteq","valuea":"5kgtaSI9Zew.$Text","typea":"property","valueb":"","typeb":"string"}},"thenActions":[{"kind":"eval_interaction","id":"_this.6Q7KqoJZSG6"}],"elseActions":[{"kind":"gotoplay","window":"MessageWnd","wndtype":"normal","objRef":{"type":"string","value":"_player.MsgScene_6ez9hbxMk6g.InvalidPromptSlide"}}]}]},"ReviewInt_6dpOBiWfhJn":{"kind":"actiongroup","actions":[{"kind":"set_enabled","objRef":{"type":"string","value":"5kgtaSI9Zew"},"enabled":{"type":"boolean","value":false}},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#CurrentQuiz_6dpOBiWfhJn","typea":"var","valueb":"5W21upISBud","typeb":"string"}},"thenActions":[{"kind":"exe_actiongroup","id":"SetLayout_pxabnsnfns10110000101"},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.5W21upISBud.$Passed","typea":"property","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"exe_actiongroup","id":"ReviewIntCorrectIncorrect_6dpOBiWfhJn"}]},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.5W21upISBud.$Passed","typea":"property","valueb":false,"typeb":"boolean"}},"thenActions":[{"kind":"exe_actiongroup","id":"ReviewIntCorrectIncorrect_6dpOBiWfhJn"}]}]}]},"ReviewIntCorrectIncorrect_6dpOBiWfhJn":{"kind":"actiongroup","actions":[]},"AnsweredInt_6dpOBiWfhJn":{"kind":"actiongroup","actions":[{"kind":"exe_actiongroup","id":"DisableChoices_6dpOBiWfhJn"},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"$WindowId","typea":"property","valueb":"_frame","typeb":"string"}},"thenActions":[{"kind":"set_frame_layout","name":"pxabnsnfns10110000101"}],"elseActions":[{"kind":"set_window_control_layout","name":"pxabnsnfns10110000101"}]}]},"DisableChoices_6dpOBiWfhJn":{"kind":"actiongroup","actions":[{"kind":"set_enabled","objRef":{"type":"string","value":"5kgtaSI9Zew"},"enabled":{"type":"boolean","value":false}}]},"6dpOBiWfhJn_CheckAnswered":{"kind":"actiongroup","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"gte","valuea":"6Q7KqoJZSG6.$AttemptCount","typea":"property","valueb":1,"typeb":"number"}},"thenActions":[{"kind":"exe_actiongroup","id":"AnsweredInt_6dpOBiWfhJn"}]}]},"SetLayout_pxabnsnfns10110000101":{"kind":"actiongroup","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"$WindowId","typea":"property","valueb":"_frame","typeb":"string"}},"thenActions":[{"kind":"set_frame_layout","name":"pxabnsnfns10110000101"}],"elseActions":[{"kind":"set_window_control_layout","name":"pxabnsnfns10110000101"}]}]},"NavigationRestrictionNextSlide_5puwH9UCplB":{"kind":"actiongroup","actions":[{"kind":"gotoplay","window":"_current","wndtype":"normal","objRef":{"type":"string","value":"_parent.5f51UtfY3rS"}}]},"NavigationRestrictionPreviousSlide_5puwH9UCplB":{"kind":"actiongroup","actions":[{"kind":"history_prev"}]}},"events":[{"kind":"onbeforeslidein","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"$WindowId","typea":"property","valueb":"_frame","typeb":"string"}},"thenActions":[{"kind":"set_frame_layout","name":"npnxnanbsnfns10110000101"}],"elseActions":[{"kind":"set_window_control_layout","name":"npnxnanbsnfns10110000101"}]}]},{"kind":"onsubmitslide","actions":[{"kind":"exe_actiongroup","id":"ActGrpOnSubmitButtonClick"}]},{"kind":"ontransitionin","actions":[{"kind":"adjustvar","variable":"_player.LastSlideViewed_6ez9hbxMk6g","operator":"set","value":{"type":"string","value":"_player."}},{"kind":"adjustvar","variable":"_player.LastSlideViewed_6ez9hbxMk6g","operator":"add","value":{"type":"property","value":"$AbsoluteId"}},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#ReviewMode_6dpOBiWfhJn","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"exe_actiongroup","id":"ReviewInt_6dpOBiWfhJn"}],"elseActions":[{"kind":"exe_actiongroup","id":"6dpOBiWfhJn_CheckAnswered"}]}]},{"kind":"onnextslide","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#ReviewMode_6dpOBiWfhJn","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#CurrentQuiz_6dpOBiWfhJn","typea":"var","valueb":"5W21upISBud","typeb":"string"}},"thenActions":[{"kind":"nextviewedslide","quizRef":{"type":"string","value":"_player.5W21upISBud"},"completed_slide_ref":{"type":"string","value":"_player.6MHaj9cZ2DX.6qOyRS3rjtA"},"status_filter":""}],"elseActions":[]}],"elseActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#RetryMode_6dpOBiWfhJn","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#CurrentQuiz_6dpOBiWfhJn","typea":"var","valueb":"5W21upISBud","typeb":"string"}},"thenActions":[{"kind":"nextviewedslide","quizRef":{"type":"string","value":"_player.5W21upISBud"},"completed_slide_ref":{"type":"string","value":"_player.6MHaj9cZ2DX.6qOyRS3rjtA"},"status_filter":""}],"elseActions":[]}],"elseActions":[{"kind":"exe_actiongroup","id":"NavigationRestrictionNextSlide_5puwH9UCplB"}]}]}]},{"kind":"onprevslide","actions":[{"kind":"exe_actiongroup","id":"NavigationRestrictionPreviousSlide_5puwH9UCplB"}]}],"slideLayers":[{"enableSeek":true,"enableReplay":true,"timeline":{"duration":5000,"events":[{"kind":"ontimelinetick","time":0,"actions":[{"kind":"show","transition":"appear","objRef":{"type":"string","value":"5kgtaSI9Zew"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6C04Xu8mtrj"}}]}]},"objects":[{"kind":"textinput","bindto":"_player.TextEntry6","align":"left","verticalAlign":"top","rtl":false,"numeric":false,"multiline":true,"maxchars":5000,"placeholder":"type your text here","fontsize":16,"textcolor":"0x000000","bold":false,"italic":false,"font":"Open Sans Charset0_v9TY33EDE6F2","marginleft":10,"marginright":10,"margintop":0,"marginbottom":0,"shapemaskId":"","xPos":36,"yPos":82,"tabIndex":1,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":323.5,"rotateYPos":218.5,"scaleX":100,"scaleY":100,"alpha":100,"rotation":0,"depth":1,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"textdata":{"uniqueId":"5kgtaSI9Zew","linkId":"","type":"vectortext","xPos":10,"yPos":5,"width":628,"height":438,"shadowIndex":-1,"vectortext":{"left":0,"top":0,"right":144,"bottom":22,"pngfb":false,"pr":{"l":"Lib","i":40}}},"html5data":{"xPos":-1,"yPos":-1,"width":649,"height":439,"strokewidth":1}},"width":648,"height":438,"resume":true,"useHandCursor":true,"background":{"type":"vector","vectorData":{"left":-1,"top":-1,"right":649,"bottom":439,"altText":"type your text here","pngfb":false,"pr":{"l":"Lib","i":39}}},"id":"5kgtaSI9Zew","events":[{"kind":"onlosefocus","actions":[{"kind":"adjustvar","variable":"_player.TextEntry6","operator":"set","value":{"type":"property","value":"$Text"}}]}]},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"6C04Xu8mtrj_-636805450","id":"01","linkId":"txt__default_6C04Xu8mtrj","type":"vectortext","xPos":0,"yPos":0,"width":0,"height":0,"shadowIndex":-1,"vectortext":{"left":0,"top":0,"right":540,"bottom":35,"pngfb":false,"pr":{"l":"Lib","i":42}}}],"shapemaskId":"","xPos":36,"yPos":22,"tabIndex":0,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":324,"rotateYPos":20,"scaleX":100,"scaleY":100,"alpha":100,"depth":2,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":648,"bottom":40,"altText":"What is the purpose of a Barriers and Aids chart?","pngfb":false,"pr":{"l":"Lib","i":41}},"html5data":{"xPos":-1,"yPos":-1,"width":649,"height":41,"strokewidth":0}},"width":648,"height":40,"resume":true,"useHandCursor":true,"id":"6C04Xu8mtrj"},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"6dpOBiWfhJn_CorrectReview","id":"01","linkId":"6dpOBiWfhJn_CorrectReview","type":"vectortext","xPos":0,"yPos":0,"width":0,"height":0,"shadowIndex":-1,"vectortext":{"left":0,"top":0,"right":400,"bottom":37,"pngfb":false,"pr":{"l":"Lib","i":44}}}],"shapemaskId":"","xPos":0,"yPos":500,"tabIndex":2,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":360,"rotateYPos":20,"scaleX":100,"scaleY":100,"alpha":100,"depth":3,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":720,"bottom":40,"altText":"Correct","pngfb":false,"pr":{"l":"Lib","i":43}},"html5data":{"xPos":1,"yPos":1,"width":717,"height":37,"strokewidth":2}},"width":720,"height":40,"resume":false,"useHandCursor":true,"id":"6dpOBiWfhJn_CorrectReview","events":[{"kind":"onrelease","actions":[{"kind":"hide","transition":"appear","objRef":{"type":"string","value":"_this"}}]}]},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"6dpOBiWfhJn_IncorrectReview","id":"01","linkId":"6dpOBiWfhJn_IncorrectReview","type":"vectortext","xPos":0,"yPos":0,"width":0,"height":0,"shadowIndex":-1,"vectortext":{"left":0,"top":0,"right":409,"bottom":37,"pngfb":false,"pr":{"l":"Lib","i":46}}}],"shapemaskId":"","xPos":0,"yPos":500,"tabIndex":3,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":360,"rotateYPos":20,"scaleX":100,"scaleY":100,"alpha":100,"depth":4,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":720,"bottom":40,"altText":"Incorrect","pngfb":false,"pr":{"l":"Lib","i":45}},"html5data":{"xPos":1,"yPos":1,"width":717,"height":37,"strokewidth":2}},"width":720,"height":40,"resume":false,"useHandCursor":true,"id":"6dpOBiWfhJn_IncorrectReview","events":[{"kind":"onrelease","actions":[{"kind":"hide","transition":"appear","objRef":{"type":"string","value":"_this"}}]}]}],"startTime":-1,"elapsedTimeMode":"normal","useHandCursor":false,"resume":true,"kind":"slidelayer","isBaseLayer":true}]}');