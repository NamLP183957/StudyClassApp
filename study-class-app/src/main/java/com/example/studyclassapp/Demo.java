package com.example.studyclassapp;

public class Demo {

    public static void main(String[] args) {
        String answer = "1";
        String[] splitAns = answer.split("_");

        for (int i = 0; i < splitAns.length; i++) {
            String ans = splitAns[i];
            System.out.println(ans + "_");
        }
    }
}
