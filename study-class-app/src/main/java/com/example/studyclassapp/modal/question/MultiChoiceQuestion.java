package com.example.studyclassapp.modal.question;

import com.example.studyclassapp.modal.Choice;
import com.fasterxml.jackson.annotation.JsonTypeInfo;
import com.fasterxml.jackson.annotation.JsonTypeName;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@Entity
@DiscriminatorValue("Multi choice question")
@Getter
@Setter
public class MultiChoiceQuestion extends Question{

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
        if (answer != null) {
            String[] splitAns = answer.split("_");
            List<String> trueAns = new ArrayList<>();
            for (Choice choice : choiceList) {
                if (choice.isAnswer()) {
                    trueAns.add(choice.getId().toString());
                }
            }

            for (int i = 0; i < splitAns.length; i++) {
                if (!trueAns.contains( splitAns[i])) return 0;
            }

            return getMark();
        }
        return 0;
    }
}
