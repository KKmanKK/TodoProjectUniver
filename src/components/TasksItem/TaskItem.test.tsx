import { fireEvent, render, screen } from '@testing-library/react';
import { describe, test, expect, vi } from 'vitest';
import { TasksItem } from '.';

const onEdited = vi.fn((_id: string, _title: string) => {});
const onRemove = vi.fn((_id: string): void => {});
const data = {
  id: '1',
  title: 'asd',
};
describe('Item component', () => {
  test('Item render', () => {
    render(
      <TasksItem
        id={data.id}
        title={data.title}
        onEdited={onEdited}
        onRemove={onRemove}
      />,
    );
    expect(screen.getByRole('checkbox')).toBeInTheDocument();
  });
  test('Item without edit mode', () => {
    render(
      <TasksItem
        id={data.id}
        title={data.title}
        onEdited={onEdited}
        onRemove={onRemove}
      />,
    );
    expect(screen.queryByRole('textbox')).toBeNull();
  });
  test('Item click edit mode', () => {
    render(
      <TasksItem
        id={data.id}
        title={data.title}
        onEdited={onEdited}
        onRemove={onRemove}
      />,
    );
    fireEvent.click(screen.getAllByRole('button')[0]);
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });
  test('Item click save', () => {
    render(
      <TasksItem
        id={data.id}
        title={data.title}
        onEdited={onEdited}
        onRemove={onRemove}
      />,
    );
    fireEvent.click(screen.getAllByRole('button')[0]);
    fireEvent.click(screen.getAllByRole('button')[0]);
    expect(onEdited).toHaveBeenCalledWith(data.id, data.title);
  });
});
