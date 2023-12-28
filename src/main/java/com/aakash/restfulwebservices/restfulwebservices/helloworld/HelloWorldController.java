package com.aakash.restfulwebservices.restfulwebservices.helloworld;

import org.springframework.web.bind.annotation.*;

@RestController
public class HelloWorldController {

    @RequestMapping(method = RequestMethod.GET, path = "/helloworld1")
    public String helloWorld() {
        return "Hello World1";
    }


    @GetMapping(path = "/helloworld")
    public String helloWorld1() {
        return "Hello World";
    }



    @GetMapping(path = "/helloworldbean")
    public HelloWorldBean helloWorldBean() {
        return new HelloWorldBean("Hello Bean");
    }

    @GetMapping(path = "/helloworldbean/{name}")
    public HelloWorldBean helloWorldBean(@PathVariable String name) {
        return new HelloWorldBean(String.format("Hello Bean %s",name));
    }

}