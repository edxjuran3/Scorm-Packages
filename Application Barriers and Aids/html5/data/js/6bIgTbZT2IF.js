window.globalProvideData('slide', '{"title":"Do you think the team created appropriate countermeasures? Why or why not?","trackViews":true,"showMenuResultIcon":false,"viewGroupId":"","historyGroupId":"","videoZoom":"","scrolling":false,"transition":"appear","transDuration":0,"transDir":1,"wipeTrans":false,"slideLock":false,"navIndex":-1,"globalAudioId":"","thumbnailid":"","presenterRef":{"id":"none"},"showAnimationId":"","lmsId":"Slide11","width":720,"height":540,"resume":true,"background":{"type":"fill","fill":{"type":"linear","rotation":90,"colors":[{"kind":"color","rgb":"0xFFFFFF","alpha":100,"stop":0}]}},"id":"6bIgTbZT2IF","actionGroups":{"ActGrpOnSubmitButtonClick":{"kind":"actiongroup","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"noteq","valuea":"6hNPEfURLVv.$Text","typea":"property","valueb":"","typeb":"string"}},"thenActions":[{"kind":"eval_interaction","id":"_this.5nfysSAvZLY"}],"elseActions":[{"kind":"gotoplay","window":"MessageWnd","wndtype":"normal","objRef":{"type":"string","value":"_player.MsgScene_6ez9hbxMk6g.InvalidPromptSlide"}}]}]},"ReviewInt_6q9axChrzXf":{"kind":"actiongroup","actions":[{"kind":"set_enabled","objRef":{"type":"string","value":"6hNPEfURLVv"},"enabled":{"type":"boolean","value":false}},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#CurrentQuiz_6q9axChrzXf","typea":"var","valueb":"5W21upISBud","typeb":"string"}},"thenActions":[{"kind":"exe_actiongroup","id":"SetLayout_pxabnsnfns10110000101"},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.5W21upISBud.$Passed","typea":"property","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"exe_actiongroup","id":"ReviewIntCorrectIncorrect_6q9axChrzXf"}]},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.5W21upISBud.$Passed","typea":"property","valueb":false,"typeb":"boolean"}},"thenActions":[{"kind":"exe_actiongroup","id":"ReviewIntCorrectIncorrect_6q9axChrzXf"}]}]}]},"ReviewIntCorrectIncorrect_6q9axChrzXf":{"kind":"actiongroup","actions":[]},"AnsweredInt_6q9axChrzXf":{"kind":"actiongroup","actions":[{"kind":"exe_actiongroup","id":"DisableChoices_6q9axChrzXf"},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"$WindowId","typea":"property","valueb":"_frame","typeb":"string"}},"thenActions":[{"kind":"set_frame_layout","name":"pxabnsnfns10110000101"}],"elseActions":[{"kind":"set_window_control_layout","name":"pxabnsnfns10110000101"}]}]},"DisableChoices_6q9axChrzXf":{"kind":"actiongroup","actions":[{"kind":"set_enabled","objRef":{"type":"string","value":"6hNPEfURLVv"},"enabled":{"type":"boolean","value":false}}]},"6q9axChrzXf_CheckAnswered":{"kind":"actiongroup","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"gte","valuea":"5nfysSAvZLY.$AttemptCount","typea":"property","valueb":1,"typeb":"number"}},"thenActions":[{"kind":"exe_actiongroup","id":"AnsweredInt_6q9axChrzXf"}]}]},"SetLayout_pxabnsnfns10110000101":{"kind":"actiongroup","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"$WindowId","typea":"property","valueb":"_frame","typeb":"string"}},"thenActions":[{"kind":"set_frame_layout","name":"pxabnsnfns10110000101"}],"elseActions":[{"kind":"set_window_control_layout","name":"pxabnsnfns10110000101"}]}]},"NavigationRestrictionNextSlide_6bIgTbZT2IF":{"kind":"actiongroup","actions":[{"kind":"gotoplay","window":"_current","wndtype":"normal","objRef":{"type":"string","value":"_parent.6GDuprtJAbD"}}]},"NavigationRestrictionPreviousSlide_6bIgTbZT2IF":{"kind":"actiongroup","actions":[{"kind":"history_prev"}]}},"events":[{"kind":"onbeforeslidein","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"$WindowId","typea":"property","valueb":"_frame","typeb":"string"}},"thenActions":[{"kind":"set_frame_layout","name":"npnxnanbsnfns10110000101"}],"elseActions":[{"kind":"set_window_control_layout","name":"npnxnanbsnfns10110000101"}]}]},{"kind":"onsubmitslide","actions":[{"kind":"exe_actiongroup","id":"ActGrpOnSubmitButtonClick"}]},{"kind":"ontransitionin","actions":[{"kind":"adjustvar","variable":"_player.LastSlideViewed_6ez9hbxMk6g","operator":"set","value":{"type":"string","value":"_player."}},{"kind":"adjustvar","variable":"_player.LastSlideViewed_6ez9hbxMk6g","operator":"add","value":{"type":"property","value":"$AbsoluteId"}},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#ReviewMode_6q9axChrzXf","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"exe_actiongroup","id":"ReviewInt_6q9axChrzXf"}],"elseActions":[{"kind":"exe_actiongroup","id":"6q9axChrzXf_CheckAnswered"}]}]},{"kind":"onnextslide","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#ReviewMode_6q9axChrzXf","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#CurrentQuiz_6q9axChrzXf","typea":"var","valueb":"5W21upISBud","typeb":"string"}},"thenActions":[{"kind":"nextviewedslide","quizRef":{"type":"string","value":"_player.5W21upISBud"},"completed_slide_ref":{"type":"string","value":"_player.6MHaj9cZ2DX.6qOyRS3rjtA"},"status_filter":""}],"elseActions":[]}],"elseActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#RetryMode_6q9axChrzXf","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#CurrentQuiz_6q9axChrzXf","typea":"var","valueb":"5W21upISBud","typeb":"string"}},"thenActions":[{"kind":"nextviewedslide","quizRef":{"type":"string","value":"_player.5W21upISBud"},"completed_slide_ref":{"type":"string","value":"_player.6MHaj9cZ2DX.6qOyRS3rjtA"},"status_filter":""}],"elseActions":[]}],"elseActions":[{"kind":"exe_actiongroup","id":"NavigationRestrictionNextSlide_6bIgTbZT2IF"}]}]}]},{"kind":"onprevslide","actions":[{"kind":"exe_actiongroup","id":"NavigationRestrictionPreviousSlide_6bIgTbZT2IF"}]}],"slideLayers":[{"enableSeek":true,"enableReplay":true,"timeline":{"duration":5000,"events":[{"kind":"ontimelinetick","time":0,"actions":[{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6hNPEfURLVv"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6KU5yr9SiqX"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6gwyEclWJ8l"}}]}]},"objects":[{"kind":"textinput","bindto":"_player.TextEntry9","align":"left","verticalAlign":"top","rtl":false,"numeric":false,"multiline":true,"maxchars":5000,"placeholder":"type your text here","fontsize":16,"textcolor":"0x000000","bold":false,"italic":false,"font":"Open Sans Charset0_v9TY33EDE6F2","marginleft":10,"marginright":10,"margintop":0,"marginbottom":0,"shapemaskId":"","xPos":36,"yPos":174,"tabIndex":2,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":323.5,"rotateYPos":172.5,"scaleX":100,"scaleY":100,"alpha":100,"rotation":0,"depth":1,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"textdata":{"uniqueId":"6hNPEfURLVv","linkId":"","type":"vectortext","xPos":10,"yPos":5,"width":628,"height":346,"shadowIndex":-1,"vectortext":{"left":0,"top":0,"right":144,"bottom":22,"pngfb":false,"pr":{"l":"Lib","i":40}}},"html5data":{"xPos":-1,"yPos":-1,"width":649,"height":347,"strokewidth":1}},"width":648,"height":346,"resume":true,"useHandCursor":true,"background":{"type":"vector","vectorData":{"left":-1,"top":-1,"right":649,"bottom":347,"altText":"type your text here","pngfb":false,"pr":{"l":"Lib","i":47}}},"id":"6hNPEfURLVv","events":[{"kind":"onlosefocus","actions":[{"kind":"adjustvar","variable":"_player.TextEntry9","operator":"set","value":{"type":"property","value":"$Text"}}]}]},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"6KU5yr9SiqX_-1756883447","id":"01","linkId":"txt__default_6KU5yr9SiqX","type":"vectortext","xPos":0,"yPos":0,"width":0,"height":0,"shadowIndex":-1,"vectortext":{"left":0,"top":0,"right":481,"bottom":65,"pngfb":false,"pr":{"l":"Lib","i":56}}}],"shapemaskId":"","xPos":36,"yPos":22,"tabIndex":0,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":324,"rotateYPos":35,"scaleX":100,"scaleY":100,"alpha":100,"depth":2,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":648,"bottom":70,"altText":"Do you think the team created appropriate countermeasures? Why or why not?","pngfb":false,"pr":{"l":"Lib","i":48}},"html5data":{"xPos":-1,"yPos":-1,"width":649,"height":71,"strokewidth":0}},"width":648,"height":70,"resume":true,"useHandCursor":true,"id":"6KU5yr9SiqX"},{"kind":"vectorshape","rotation":0,"accType":"button","cliptobounds":false,"defaultAction":"onrelease","textLib":[{"kind":"textdata","uniqueId":"5wEeGkWPZIk_-1195487408","id":"01","linkId":"txt__default_6gwyEclWJ8l","type":"vectortext","xPos":0,"yPos":0,"width":0,"height":0,"shadowIndex":-1,"vectortext":{"left":0,"top":0,"right":172,"bottom":50,"pngfb":false,"pr":{"l":"Lib","i":57}}}],"shapemaskId":"","xPos":264,"yPos":102,"tabIndex":1,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":96,"rotateYPos":26.5,"scaleX":100,"scaleY":100,"alpha":100,"depth":3,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-2,"top":-2,"right":193,"bottom":54,"altText":"The Countermeasures","pngfb":false,"pr":{"l":"Lib","i":50}},"html5data":{"xPos":-1,"yPos":-1,"width":193,"height":54,"strokewidth":1}},"states":[{"kind":"state","name":"_default_Disabled","data":{"hotlinkId":"","accState":1,"vectorData":{"left":-2,"top":-2,"right":193,"bottom":54,"altText":"The Countermeasures","pngfb":false,"pr":{"l":"Lib","i":50}},"html5data":{"xPos":-2,"yPos":-2,"width":195,"height":56,"strokewidth":1}}},{"kind":"state","name":"_default_Down","data":{"hotlinkId":"","accState":8,"vectorData":{"left":-2,"top":-2,"right":193,"bottom":54,"altText":"The Countermeasures","pngfb":false,"pr":{"l":"Lib","i":51}},"html5data":{"xPos":-2,"yPos":-2,"width":195,"height":56,"strokewidth":1}}},{"kind":"state","name":"_default_Visited","data":{"hotlinkId":"","accState":0,"vectorData":{"left":-2,"top":-2,"right":193,"bottom":54,"altText":"The Countermeasures","pngfb":false,"pr":{"l":"Lib","i":50}},"html5data":{"xPos":-2,"yPos":-2,"width":195,"height":56,"strokewidth":1}}},{"kind":"state","name":"_default_Visited_Disabled","data":{"hotlinkId":"","accState":1,"vectorData":{"left":-2,"top":-2,"right":193,"bottom":54,"altText":"The Countermeasures","pngfb":false,"pr":{"l":"Lib","i":50}},"html5data":{"xPos":-2,"yPos":-2,"width":195,"height":56,"strokewidth":1}}},{"kind":"state","name":"_default_Down_Visited","data":{"hotlinkId":"","accState":8,"vectorData":{"left":-2,"top":-2,"right":193,"bottom":54,"altText":"The Countermeasures","pngfb":false,"pr":{"l":"Lib","i":51}},"html5data":{"xPos":-2,"yPos":-2,"width":195,"height":56,"strokewidth":1}}},{"kind":"state","name":"_default_Hover","data":{"hotlinkId":"","accState":0,"vectorData":{"left":-2,"top":-2,"right":193,"bottom":54,"altText":"The Countermeasures","pngfb":false,"pr":{"l":"Lib","i":52}},"html5data":{"xPos":-2,"yPos":-2,"width":195,"height":56,"strokewidth":1}}},{"kind":"state","name":"_default_Hover_Disabled","data":{"hotlinkId":"","accState":1,"vectorData":{"left":-2,"top":-2,"right":193,"bottom":54,"altText":"The Countermeasures","pngfb":false,"pr":{"l":"Lib","i":52}},"html5data":{"xPos":-2,"yPos":-2,"width":195,"height":56,"strokewidth":1}}},{"kind":"state","name":"_default_Hover_Down","data":{"hotlinkId":"","accState":8,"vectorData":{"left":-2,"top":-2,"right":193,"bottom":54,"altText":"The Countermeasures","pngfb":false,"pr":{"l":"Lib","i":51}},"html5data":{"xPos":-2,"yPos":-2,"width":195,"height":56,"strokewidth":1}}},{"kind":"state","name":"_default_Hover_Visited","data":{"hotlinkId":"","accState":0,"vectorData":{"left":-2,"top":-2,"right":193,"bottom":54,"altText":"The Countermeasures","pngfb":false,"pr":{"l":"Lib","i":52}},"html5data":{"xPos":-2,"yPos":-2,"width":195,"height":56,"strokewidth":1}}},{"kind":"state","name":"_default_Hover_Visited_Disabled","data":{"hotlinkId":"","accState":1,"vectorData":{"left":-2,"top":-2,"right":193,"bottom":54,"altText":"The Countermeasures","pngfb":false,"pr":{"l":"Lib","i":52}},"html5data":{"xPos":-2,"yPos":-2,"width":195,"height":56,"strokewidth":1}}},{"kind":"state","name":"_default_Hover_Down_Visited","data":{"hotlinkId":"","accState":8,"vectorData":{"left":-2,"top":-2,"right":193,"bottom":54,"altText":"The Countermeasures","pngfb":false,"pr":{"l":"Lib","i":51}},"html5data":{"xPos":-2,"yPos":-2,"width":195,"height":56,"strokewidth":1}}}],"width":192,"height":53,"resume":true,"useHandCursor":true,"id":"6gwyEclWJ8l","variables":[{"kind":"variable","name":"_hover","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_down","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_visited","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_disabled","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_savevisited","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_state","type":"string","value":"_default","resume":true},{"kind":"variable","name":"_stateName","type":"string","value":"","resume":true},{"kind":"variable","name":"_tempStateName","type":"string","value":"","resume":false}],"actionGroups":{"ActGrpSetVisitedState":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_savevisited","operator":"set","value":{"type":"var","value":"#_visited"}},{"kind":"adjustvar","variable":"_visited","operator":"set","value":{"type":"boolean","value":true}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},"ActGrpSetHoverState":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_hover","operator":"set","value":{"type":"boolean","value":true}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},"ActGrpClearHoverState":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_hover","operator":"set","value":{"type":"boolean","value":false}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},"ActGrpSetDisabledState":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_disabled","operator":"set","value":{"type":"boolean","value":true}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},"ActGrpSetDownState":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_down","operator":"set","value":{"type":"boolean","value":true}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},"ActGrpClearStateVars":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_hover","operator":"set","value":{"type":"boolean","value":false}},{"kind":"adjustvar","variable":"_down","operator":"set","value":{"type":"boolean","value":false}},{"kind":"adjustvar","variable":"_visited","operator":"set","value":{"type":"boolean","value":false}},{"kind":"adjustvar","variable":"_disabled","operator":"set","value":{"type":"boolean","value":false}},{"kind":"adjustvar","variable":"_savevisited","operator":"set","value":{"type":"boolean","value":false}}]}},"events":[{"kind":"onrelease","actions":[{"kind":"exe_actiongroup","id":"ActGrpSetVisitedState","scopeRef":{"type":"string","value":"_this"}},{"kind":"adjustvar","variable":"_down","operator":"set","value":{"type":"boolean","value":false}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}},{"kind":"gotoplay","window":"LightboxWnd","wndtype":"normal","objRef":{"type":"string","value":"_player.6Gb8nKFwyey.6GNiqcbZImO"}}]},{"kind":"ontransitionin","actions":[{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},{"kind":"onrollover","actions":[{"kind":"exe_actiongroup","id":"ActGrpSetHoverState","scopeRef":{"type":"string","value":"_this"}}]},{"kind":"onrollout","actions":[{"kind":"exe_actiongroup","id":"ActGrpClearHoverState","scopeRef":{"type":"string","value":"_this"}}]},{"kind":"onpress","actions":[{"kind":"exe_actiongroup","id":"ActGrpSetDownState","scopeRef":{"type":"string","value":"_this"}}]},{"kind":"onreleaseoutside","actions":[{"kind":"adjustvar","variable":"_down","operator":"set","value":{"type":"boolean","value":false}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]}]},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"6q9axChrzXf_CorrectReview","id":"01","linkId":"6q9axChrzXf_CorrectReview","type":"vectortext","xPos":0,"yPos":0,"width":0,"height":0,"shadowIndex":-1,"vectortext":{"left":0,"top":0,"right":400,"bottom":37,"pngfb":false,"pr":{"l":"Lib","i":44}}}],"shapemaskId":"","xPos":0,"yPos":500,"tabIndex":3,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":360,"rotateYPos":20,"scaleX":100,"scaleY":100,"alpha":100,"depth":4,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":720,"bottom":40,"altText":"Correct","pngfb":false,"pr":{"l":"Lib","i":43}},"html5data":{"xPos":1,"yPos":1,"width":717,"height":37,"strokewidth":2}},"width":720,"height":40,"resume":false,"useHandCursor":true,"id":"6q9axChrzXf_CorrectReview","events":[{"kind":"onrelease","actions":[{"kind":"hide","transition":"appear","objRef":{"type":"string","value":"_this"}}]}]},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"6q9axChrzXf_IncorrectReview","id":"01","linkId":"6q9axChrzXf_IncorrectReview","type":"vectortext","xPos":0,"yPos":0,"width":0,"height":0,"shadowIndex":-1,"vectortext":{"left":0,"top":0,"right":409,"bottom":37,"pngfb":false,"pr":{"l":"Lib","i":46}}}],"shapemaskId":"","xPos":0,"yPos":500,"tabIndex":4,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":360,"rotateYPos":20,"scaleX":100,"scaleY":100,"alpha":100,"depth":5,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":720,"bottom":40,"altText":"Incorrect","pngfb":false,"pr":{"l":"Lib","i":45}},"html5data":{"xPos":1,"yPos":1,"width":717,"height":37,"strokewidth":2}},"width":720,"height":40,"resume":false,"useHandCursor":true,"id":"6q9axChrzXf_IncorrectReview","events":[{"kind":"onrelease","actions":[{"kind":"hide","transition":"appear","objRef":{"type":"string","value":"_this"}}]}]}],"startTime":-1,"elapsedTimeMode":"normal","useHandCursor":false,"resume":true,"kind":"slidelayer","isBaseLayer":true}]}');