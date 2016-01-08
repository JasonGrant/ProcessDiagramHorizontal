var processData = [
{ 
    "name": "Primary Process Name",
    "type": "Heading",
    "level": "Level00",
    "children": [
        { 
            "name": "Main A",
            "type": "Heading",
            "level": "Level01",
            "parent": "Primary Process Name",
            "children": [
                { 
                    "name": "Secondary A1",
                    "type": "Heading",
                    "level": "Level02",
                    "parent": "Main A",
                    "children": [
                            
                                    {
                                        "name": "Task Short Description",
                                        "parent": "Task Grouping A1.1",
                                        "type": "Task",
                                        "url": "taskURL"
                                    },
                                    {
                                        "name": "Review Short Description",
                                        "parent": "Task Grouping A1.1",
                                        "type": "Review",
                                        "url": "reviewURL"
                                    },
                                    {
                                        "name": "Milestone Short Description",
                                        "parent": "Task Grouping A1.1",
                                        "type": "Milestone",
                                        "url": "#"
                                    }
                                  
                    ]
                } 
            ]
        },  
        { 
            "name": "Main B",
            "type": "Heading",
            "level": "Level01",
            "parent": "Execution",
            "children": [
                { 
                    "name": "Secondary B1",
                    "type": "Heading",
                    "level": "Level02",
                    "parent": "Main B",
                    "children": [
                        { 
                            "name": "Task Grouping B1.1",
                            "type": "Heading",
                            "level": "Level03",
                            "parent": "Secondary B1",
                            "children": [
                                    {
                                        "name": "Task Short Description",
                                        "parent": "Task Grouping B1.1",
                                        "type": "Task",
                                        "url": "taskURL"
                                    },
                                    {
                                        "name": "Review Short Description",
                                        "parent": "Task Grouping B1.1",
                                        "type": "Review",
                                        "url": "reviewURL"
                                    },
                                    {
                                        "name": "Milestone Short Description",
                                        "parent": "Task Grouping B1.1",
                                        "type": "Milestone",
                                        "url": "#"
                                    }

                                ]
                            }

                    ]
                },  
                { 
                    "name": "Secondary B2",
                    "type": "Heading",
                    "level": "Level02",
                    "parent": "Main B",
                    "children": [
                        { 
                            "name": "Task Grouping B2.1",
                            "type": "Heading",
                            "level": "Level03",
                            "parent": "Secondary B2",
                            "children": [
                                    {
                                        "name": "Task Short Description",
                                        "parent": "Task Grouping B2.1",
                                        "type": "Task",
                                        "url": "taskURL"
                                    },
                                    {
                                        "name": "Review Short Description",
                                        "parent": "Task Grouping B2.1",
                                        "type": "Review",
                                        "url": "reviewURL"
                                    },
                                    {
                                        "name": "Milestone Short Description",
                                        "parent": "Task Grouping B2.1",
                                        "type": "Milestone",
                                        "url": "#"
                                    }

                                ]
                        },
                        { 
                            "name": "Task Grouping B2.2",
                            "type": "Heading",
                            "level": "Level03",
                            "parent": "Secondary B2",
                            "children": [
                                    {
                                        "name": "Task Short Description",
                                        "parent": "Task Grouping B2.2",
                                        "type": "Task",
                                        "url": "taskURL"
                                    },
                                    {
                                        "name": "Review Short Description",
                                        "parent": "Task Grouping B2.2",
                                        "type": "Review",
                                        "url": "reviewURL"
                                    },
                                    {
                                        "name": "Milestone Short Description",
                                        "parent": "Task Grouping B2.2",
                                        "type": "Milestone",
                                        "url": "#"
                                    }

                                ]
                        }
                    ]
                }  
            ]
        },   
        { 
            "name": "Main C",
            "type": "Heading",
            "level": "Level01",
            "parent": "Execution",
            "children": [
                { 
                    "name": "Secondary C1",
                    "type": "Heading",
                    "level": "Level02",
                    "parent": "Main C",
                    "children": [
                        { 
                            "name": "Task Grouping C1.1",
                            "type": "Heading",
                            "level": "Level03",
                            "parent": "Secondary C1",
                            "children" : [
                                {
                                    "name": "Task Short Description",
                                    "parent": "Task Grouping C1.1",
                                    "type": "Task",
                                    "url": "taskURL"
                                },
                                {
                                    "name": "Review Short Description",
                                    "parent": "Task Grouping C1.1",
                                    "type": "Review",
                                    "url": "reviewURL"
                                },
                                {
                                    "name": "Milestone Short Description",
                                    "parent": "Task Grouping C1.1",
                                    "type": "Milestone",
                                    "url": "#"
                                }

                            ]
                        } 

                    ]
                },  
                { 
                    "name": "Secondary C2",
                    "type": "Heading",
                    "level": "Level02",
                    "parent": "Main C",
                    "children": [
                        { 
                            "name": "Task Grouping C2.1",
                            "type": "Heading",
                            "level": "Level03",
                            "parent": "Secondary C2",
                            "children" : [
                                {
                                    "name": "Task Short Description",
                                    "parent": "Task Grouping C2.1",
                                    "type": "Task",
                                    "url": "taskURL"
                                },
                                {
                                    "name": "Review Short Description",
                                    "parent": "Task Grouping C2.1",
                                    "type": "Review",
                                    "url": "reviewURL"
                                },
                                {
                                    "name": "Milestone Short Description",
                                    "parent": "Task Grouping C2.1",
                                    "type": "Milestone",
                                    "url": "#"
                                }

                            ]
                        },
                        { 
                            "name": "Task Grouping C2.2",
                            "type": "Heading",
                            "level": "Level03",
                            "parent": "Secondary C2",
                            "children" : [
                                {
                                    "name": "Task Short Description",
                                    "parent": "Task Grouping C2.2",
                                    "type": "Task",
                                    "url": "taskURL"
                                },
                                {
                                    "name": "Review Short Description",
                                    "parent": "Task Grouping C2.2",
                                    "type": "Review",
                                    "url": "reviewURL"
                                },
                                {
                                    "name": "Milestone Short Description",
                                    "parent": "Task Grouping C2.2",
                                    "type": "Milestone",
                                    "url": "#"
                                }

                            ]
                        } 
                    ]
                },
                { 
                    "name": "Secondary C3",
                    "type": "Heading",
                    "level": "Level02",
                    "parent": "Main C",
                    "children": [
                        { 
                            "name": "Task Grouping C3.1",
                            "type": "Heading",
                            "level": "Level03",
                            "parent": "Secondary C3",
                            "children" : [
                                {
                                    "name": "Task Short Description",
                                    "parent": "Task Grouping C3.1",
                                    "type": "Task",
                                    "url": "taskURL"
                                },
                                {
                                    "name": "Review Short Description",
                                    "parent": "Task Grouping C3.1",
                                    "type": "Review",
                                    "url": "reviewURL"
                                },
                                {
                                    "name": "Milestone Short Description",
                                    "parent": "Task Grouping C3.1",
                                    "type": "Milestone",
                                    "url": "#"
                                }

                            ]
                        },
                        { 
                            "name": "Task Grouping C3.2",
                            "type": "Heading",
                            "level": "Level03",
                            "parent": "Secondary C3",
                            "children" : [
                                {
                                    "name": "Task Short Description",
                                    "parent": "Task Grouping C3.2",
                                    "type": "Task",
                                    "url": "taskURL"
                                },
                                {
                                    "name": "Review Short Description",
                                    "parent": "Task Grouping C3.2",
                                    "type": "Review",
                                    "url": "reviewURL"
                                },
                                {
                                    "name": "Milestone Short Description",
                                    "parent": "Task Grouping C3.2",
                                    "type": "Milestone",
                                    "url": "#"
                                }

                            ]
                        },
                        { 
                            "name": "Task Grouping C3.3",
                            "type": "Heading",
                            "level": "Level03",
                            "parent": "Secondary C3",
                            "children" : [
                                {
                                    "name": "Task Short Description",
                                    "parent": "Task Grouping C3.3",
                                    "type": "Task",
                                    "url": "taskURL"
                                },
                                {
                                    "name": "Review Short Description",
                                    "parent": "Task Grouping C3.3",
                                    "type": "Review",
                                    "url": "reviewURL"
                                },
                                {
                                    "name": "Milestone Short Description",
                                    "parent": "Task Grouping C3.3",
                                    "type": "Milestone",
                                    "url": "#"
                                }

                            ]
                        }
                    ]
                }
            ]
        },   
        { 
            "name": "Main D",
            "type": "Heading",
            "level": "Level01",
            "parent": "Execution",
            "children": [
                { 
                    "name": "Secondary D1",
                    "type": "Heading",
                    "level": "Level02",
                    "parent": "Main D",
                    "children": [
                        { 
                            "name": "Task Grouping D1.1",
                            "type": "Heading",
                            "level": "Level03",
                            "parent": "Secondary D1",
                            "children" : [
                                {
                                    "name": "Task Short Description",
                                    "parent": "Task Grouping D1.1",
                                    "type": "Task",
                                    "url": "taskURL"
                                },
                                {
                                    "name": "Review Short Description",
                                    "parent": "Task Grouping D1.1",
                                    "type": "Review",
                                    "url": "reviewURL"
                                },
                                {
                                    "name": "Milestone Short Description",
                                    "parent": "Task Grouping D1.1",
                                    "type": "Milestone",
                                    "url": "#"
                                }

                            ]
                        } 

                    ]
                },  
                { 
                    "name": "Secondary D2",
                    "type": "Heading",
                    "level": "Level02",
                    "parent": "Main D",
                    "children": [
                        { 
                            "name": "Task Grouping D2.1",
                            "type": "Heading",
                            "level": "Level03",
                            "parent": "Secondary D2",
                            "children" : [
                                {
                                    "name": "Task Short Description",
                                    "parent": "Task Grouping D2.1",
                                    "type": "Task",
                                    "url": "taskURL"
                                },
                                {
                                    "name": "Review Short Description",
                                    "parent": "Task Grouping D2.1",
                                    "type": "Review",
                                    "url": "reviewURL"
                                },
                                {
                                    "name": "Milestone Short Description",
                                    "parent": "Task Grouping D2.1",
                                    "type": "Milestone",
                                    "url": "#"
                                }

                            ]
                        },
                        { 
                            "name": "Task Grouping D2.2",
                            "type": "Heading",
                            "level": "Level03",
                            "parent": "Secondary D2",
                            "children" : [
                                {
                                    "name": "Task Short Description",
                                    "parent": "Task Grouping D2.2",
                                    "type": "Task",
                                    "url": "taskURL"
                                },
                                {
                                    "name": "Review Short Description",
                                    "parent": "Task Grouping D2.2",
                                    "type": "Review",
                                    "url": "reviewURL"
                                },
                                {
                                    "name": "Milestone Short Description",
                                    "parent": "Task Grouping D2.2",
                                    "type": "Milestone",
                                    "url": "#"
                                }

                            ]
                        } 
                    ]
                },
                { 
                    "name": "Secondary D3",
                    "type": "Heading",
                    "level": "Level02",
                    "parent": "Main D",
                    "children": [
                        { 
                            "name": "Task Grouping D3.1",
                            "type": "Heading",
                            "level": "Level03",
                            "parent": "Secondary D3",
                            "children" : [
                                {
                                    "name": "Task Short Description",
                                    "parent": "Task Grouping D3.1",
                                    "type": "Task",
                                    "url": "taskURL"
                                },
                                {
                                    "name": "Review Short Description",
                                    "parent": "Task Grouping D3.1",
                                    "type": "Review",
                                    "url": "reviewURL"
                                },
                                {
                                    "name": "Milestone Short Description",
                                    "parent": "Task Grouping D3.1",
                                    "type": "Milestone",
                                    "url": "#"
                                }

                            ]
                        },
                        { 
                            "name": "Task Grouping D3.2",
                            "type": "Heading",
                            "level": "Level03",
                            "parent": "Secondary D3",
                            "children" : [
                                {
                                    "name": "Task Short Description",
                                    "parent": "Task Grouping D3.2",
                                    "type": "Task",
                                    "url": "taskURL"
                                },
                                {
                                    "name": "Review Short Description",
                                    "parent": "Task Grouping D3.2",
                                    "type": "Review",
                                    "url": "reviewURL"
                                },
                                {
                                    "name": "Milestone Short Description",
                                    "parent": "Task Grouping D3.2",
                                    "type": "Milestone",
                                    "url": "#"
                                }

                            ]
                        },
                        { 
                            "name": "Task Grouping D3.3",
                            "type": "Heading",
                            "level": "Level03",
                            "parent": "Secondary D3",
                            "children" : [
                                {
                                    "name": "Task Short Description",
                                    "parent": "Task Grouping D3.3",
                                    "type": "Task",
                                    "url": "taskURL"
                                },
                                {
                                    "name": "Review Short Description",
                                    "parent": "Task Grouping D3.3",
                                    "type": "Review",
                                    "url": "reviewURL"
                                },
                                {
                                    "name": "Milestone Short Description",
                                    "parent": "Task Grouping D3.3",
                                    "type": "Milestone",
                                    "url": "#"
                                }

                            ]
                        }
                    ]
                },
                { 
                    "name": "Secondary D4",
                    "type": "Heading",
                    "level": "Level02",
                    "parent": "Main D",
                    "children": [
                        { 
                            "name": "Task Grouping D4.1",
                            "type": "Heading",
                            "level": "Level03",
                            "parent": "Secondary D4",
                            "children" : [
                                {
                                    "name": "Task Short Description",
                                    "parent": "Task Grouping D4.1",
                                    "type": "Task",
                                    "url": "taskURL"
                                },
                                {
                                    "name": "Review Short Description",
                                    "parent": "Task Grouping D4.1",
                                    "type": "Review",
                                    "url": "reviewURL"
                                },
                                {
                                    "name": "Milestone Short Description",
                                    "parent": "Task Grouping D4.1",
                                    "type": "Milestone",
                                    "url": "#"
                                }

                            ]
                        },
                        { 
                            "name": "Task Grouping D4.2",
                            "type": "Heading",
                            "level": "Level03",
                            "parent": "Secondary D4",
                            "children" : [
                                {
                                    "name": "Task Short Description",
                                    "parent": "Task Grouping D4.2",
                                    "type": "Task",
                                    "url": "taskURL"
                                },
                                {
                                    "name": "Review Short Description",
                                    "parent": "Task Grouping D4.2",
                                    "type": "Review",
                                    "url": "reviewURL"
                                },
                                {
                                    "name": "Milestone Short Description",
                                    "parent": "Task Grouping D4.2",
                                    "type": "Milestone",
                                    "url": "#"
                                }

                            ]
                        },
                        { 
                            "name": "Task Grouping D4.3",
                            "type": "Heading",
                            "level": "Level03",
                            "parent": "Secondary D4",
                            "children" : [
                                {
                                    "name": "Task Short Description",
                                    "parent": "Task Grouping D4.3",
                                    "type": "Task",
                                    "url": "taskURL"
                                },
                                {
                                    "name": "Review Short Description",
                                    "parent": "Task Grouping D4.3",
                                    "type": "Review",
                                    "url": "reviewURL"
                                },
                                {
                                    "name": "Milestone Short Description",
                                    "parent": "Task Grouping D4.3",
                                    "type": "Milestone",
                                    "url": "#"
                                }

                            ]
                        },
                        { 
                            "name": "Task Grouping D4.4",
                            "type": "Heading",
                            "level": "Level03",
                            "parent": "Secondary D4",
                            "children" : [
                                {
                                    "name": "Task Short Description",
                                    "parent": "Task Grouping D4.4",
                                    "type": "Task",
                                    "url": "taskURL"
                                },
                                {
                                    "name": "Test",
                                    "parent": "Task Grouping D4.4",
                                    "type": "Review",
                                    "url": "reviewURL"
                                },
                                {
                                    "name": "Milestone Short Description",
                                    "parent": "Task Grouping D4.4",
                                    "type": "Milestone",
                                    "url": "#"
                                }

                            ]
                        }
                    ]
                }
            ]
        }    
    ]
}    
]; 

createDiagram(processData);