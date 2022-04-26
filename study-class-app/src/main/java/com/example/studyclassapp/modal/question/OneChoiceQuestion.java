package com.example.studyclassapp.modal.question;

import com.example.studyclassapp.modal.Choice;
import com.fasterxml.jackson.annotation.JsonTypeName;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.List;

@Entity
@DiscriminatorValue("One choice question")
@Getter
@Setter
public class OneChoiceQuestion extends Question{

    @OneToMany(cascade = CascadeType.ALL)
    @JoinColumn(name = "question_id", referencedColumnName = "id")
    private List<Choice> choiceList;

    @Override
    public void hideAnswer() {
        for (Choice choice : choiceList) {
            choice.setAnswer(false);
        }
    }

    @Override
    public Integer getMark(String answer) {
        if (answer == null) {
            return 0;
        } else {
            String[] splitAns = answer.split("_");
            if (splitAns.length != 1) {
                return 0;
            } else {
                Long ansId = Long.parseLong(splitAns[0]);

                for (Choice choice : choiceList) {
                    if (choice.getId().equals(ansId)) {
                        return choice.isAnswer() ? getMark() : 0;
                    }
                }
            }
        }

        return 0;
    }
}
