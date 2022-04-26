package com.example.studyclassapp.modal.question;

import com.fasterxml.jackson.annotation.JsonTypeName;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;

@Entity
@DiscriminatorValue("Type question")
@Getter
@Setter
public class TypeQuestion extends Question{
    private String answer;

    @Override
    public void hideAnswer() {
        setAnswer(null);
    }

    @Override
    public Integer getMark(String answer) {
//        System.out.println("true answer: " + this.answer);
//        System.out.println("submit answer: " + answer);
        return (this.answer.equals(answer)) ? this.getMark() : 0;
    }
}
